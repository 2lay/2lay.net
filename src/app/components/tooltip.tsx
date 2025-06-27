export default function Tooltip({ children, text, className }: { children: React.ReactNode, text: string, className?: string }) {
    return (
        <span 
        className={`text-white relative group cursor-help ${className}`}
        onMouseEnter={(e) => {
            if (text) {
                const tooltip = document.createElement('div');
                tooltip.className = 'fixed bg-black/90 text-white text-xs px-2 py-1 border border-white/20 z-50 pointer-events-none max-w-xs break-words';
                tooltip.textContent = text;
                tooltip.id = 'service-tooltip';
                document.body.appendChild(tooltip);
                
                const updatePosition = (event: MouseEvent) => {
                    const x = event.clientX + 10;
                    const y = event.clientY - 30;
                    
                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;
                    const tooltipRect = tooltip.getBoundingClientRect();
                    
                    let adjustedX = x;
                    if (x + tooltipRect.width > viewportWidth - 10) {
                        adjustedX = event.clientX - tooltipRect.width - 10;
                    }
                    
                    let adjustedY = y;
                    if (y < 10) {
                        adjustedY = event.clientY + 20;
                    }
                    
                    tooltip.style.left = `${Math.max(10, adjustedX)}px`;
                    tooltip.style.top = `${Math.max(10, adjustedY)}px`;
                };
                
                updatePosition(e.nativeEvent);
                document.addEventListener('mousemove', updatePosition);
                tooltip.dataset.mouseMoveListener = 'true';
            }
        }}
        onMouseLeave={() => {
            const tooltip = document.getElementById('service-tooltip');
            if (tooltip) {
                document.removeEventListener('mousemove', tooltip.dataset.mouseMoveListener ? 
                    (e: MouseEvent) => {
                        const x = e.clientX + 10;
                        const y = e.clientY - 30;
                        
                        const viewportWidth = window.innerWidth;
                        const viewportHeight = window.innerHeight;
                        const tooltipRect = tooltip.getBoundingClientRect();
                        
                        let adjustedX = x;
                        if (x + tooltipRect.width > viewportWidth - 10) {
                            adjustedX = e.clientX - tooltipRect.width - 10;
                        }
                        
                        let adjustedY = y;
                        if (y < 10) {
                            adjustedY = e.clientY + 20;
                        }
                        
                        tooltip.style.left = `${Math.max(10, adjustedX)}px`;
                        tooltip.style.top = `${Math.max(10, adjustedY)}px`;
                    } : () => {}
                );
                tooltip.remove();
            }
        }}
    >
        {children}
        {text && <span className="text-white/40 ml-1">*</span>}
    </span>
    )
}
