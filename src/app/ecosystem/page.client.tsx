"use client"
import Card from "@/app/components/card";
import Tooltip from "@/app/components/tooltip";
import { useState } from "react";


function Highlight(props: { children: React.ReactNode }) {
    return <span className="text-pink-500 font-semibold">{props.children}</span>
}

const servers = [
    {
        name: "clover",
        os: "Debian 12",
        hostname: "clover.tmw.gg",
        color: "#83e69e",
        description: "Main server for TMW.gg running Minecraft servers",
        status: "Running",
        cpu: "AMD Ryzen 9 9950X",
        localip: "192.168.60.1",
        tailscaleip: "100.100.60.1",
        motherboard: "ASUS TUF X650E",
        memory: "Corsair Vengeance 4x48GB DDR5 5600MHz",
        storage: "2x Samsung 990 Pro 4TB SSD (RAID 1), 5x16TB HGST HDD (RAID 5)",
        location: "Sweden (home)",
        kvm: "NanoKVM PCIe base (Local: 192.168.60.2, Tailscale: 100.100.60.2)",
        services: [
            { name: "Minecraft Servers", type: "minecraft", port: "25566 - 25585", note: "Traffic routed through VPS via UFW rules (infra.tmw.gg)" },
            { name: "Minecraft Servers (TMW.gg, Velocity)", type: "minecraft", port: "40000 - 40020", note: "Traffic routed through VPS via Velocity proxy (infra.tmw.gg)" },
            { name: "Pterodactyl Wings", type: "automation", port: "8080", note: "Pterodactyl backend for the VPS" },
            { name: "Minio", type: "storage", port: "9000", note: "Object storage for Minecraft backups" },
        ]
    },
    {
        name: "lotus",
        os: "Debian 12",
        hostname: "lotus.2lay.net",
        color: "#eb86c8",
        description: "Lenovo ThinkCentre M75q mini PC running services for my personal use",
        status: "Running",
        cpu: "AMD Ryzen 5 3400GE",
        localip: "192.168.61.1",
        tailscaleip: "100.100.61.1",
        motherboard: "ASUS TUF X570-PLUS",
        memory: "Corsair Vengeance 4x16GB DDR4 3200MHz",
        storage: "1TB Samsung 970 EVO Plus M.2 SSD, 4TB IronWolf HDD (external)",
        location: "Sweden (home)",
        kvm: "NanoKVM Lite (Local: 192.168.61.2, Tailscale: 100.100.61.2)",
        services: [
            { name: "Samba", type: "media", port: "445", note: "File sharing from IronWolf HDD" },
            { name: "Home Assistant", type: "automation", port: "8123", note: "Home automation" },
            { name: "Pi-hole", type: "dns", port: "53", note: "Ad-blocking DNS" }
        ]
    },
    {
        name: "infra.tmw.gg",
        os: "Debian 12",
        hostname: "infra.tmw.gg",
        color: "#F4AA4D",
        description: "VPS for TMW.gg",
        status: "Running",
        cpu: "AMD EPYC 7443P (3 vCores)",
        tailscaleip: "100.100.90.1",
        memory: "3GB",
        storage: "80GB",
        location: "Stockholm, Sweden (hostup.se)",
        services: [
            { name: "Velocity Proxy", type: "minecraft", port: "25565", note: "Routes traffic from TMW.gg servers (clover)" },
            { name: "Minecraft UFW Rules", type: "automation", port: "25566 - 25585", note: "Routes traffic from Minecraft servers (clover)" },
            { name: "Nginx Proxy", type: "web", port: "80/443", note: "Routes traffic to TMW.gg website, Pterodactyl, etc." },
            { name: "Pterodactyl Wings", type: "automation", port: "8080", note: "Pterodactyl backend for the VPS" },
            { name: "Grafana", type: "monitoring", port: "3000", note: "Monitoring for the VPS & Clover" },
            { name: "Postgres & Redis & MariaDB", type: "storage", port: "5432/6379/3306", note: "Databases for Pterodactyl, Minecraft, Frontend, etc." },
            { name: "Frontend", type: "web", port: "3001", note: "Next.js frontend for TMW.gg" },
            { name: "Discord Bot", type: "bot", port: "N/A", note: "Discord bot for TMW.gg" }
        ]
    },
]

const devices = [
    {
        name: "powerbook",
        color: "#4a7eff",
        device: "Macbook Pro 14 (2024)",
        os: "macOS Sequoia",
        cpu: "Apple M3 Max",
        memory: "36GB",
        storage: "1TB",
        localip: "192.168.30.1",
        tailscaleip: "100.100.30.1",
    },
    {
        name: "desktop",
        color: "#ff4a4a",
        os: "Windows 10 IoT Enterprise LTSC 2021",
        cpu: "AMD Ryzen 7 7800X3D",
        motherboard: "NZXT N7 B650E",
        memory: "G.SKILL Flare X5 DDR5 2x32GB 6200MHz",
        storage: "Kingston A5000 512GB (boot), WD Black SN850X 1TB (data/games)",
        gpu: "ASUS TUF RTX 7900XTX",
        case: "Corsair 3000D",
        cooling: "DeepCool LT720 White AIO",
        psu: "Corsair HX1500i 1500W",
        localip: "192.168.30.2",
        tailscaleip: "100.100.30.2",
    },
    {
        name: "phone",
        os: "iOS 18",
        color: "#cf75ff",
        device: "iPhone 14 Pro Max",
        storage: "128GB",
        localip: "192.168.30.3",
        tailscaleip: "100.100.30.3",
    },

]

const services = [
    {
        name: "Dropbox (3TB)",
        color: "#0061FF",
        description: "Cloud storage service for file synchronization and sharing across my devices.",
    },
    {
        name: "Telegram",
        color: "#0088CC",
        description: "Instant messaging, currently using for private use and for staff communication within TMW.gg.",
    },
    {
        name: "Discord",
        color: "#5865F2",
        description: "That gaming platform that everyone uses.",
    },
    {
        name: "Spotify",
        color: "#1ED760",
        description: "Music streaming service."  
    },
    {
        name: "Fjordd Launcher",
        color: "#089EC6",
        description: "Launcher for Minecraft, fork of Prism Launcher that support FTB Modpacks."
    },
    {
        name: "Cursor",
        color: "#9A9A9A",
        description: "AI code editor, currently using for coding, not vibe coding lol."
    },
    {
        name: "Ghostty",
        color: "#0B23A9",
        description: "Terminal emulator, using with zsh, starship.rs and tmux."
    },
    {
        name: "Termius",
        color: "#229EBB",
        description: "FTP & SFTP client, using for connecting to servers on my phone."
    },
    {
        name: "Filezilla & WinSCP",
        color: "#A40001",
        description: "FTP client, using for connecting to servers."
    },
    {
        name: "Raycast",
        color: "#FF6565",
        description: "Launcher for apps on macOS and Windows."
    },
]

const getServiceTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
        minecraft: "#90EE90",
        web: "#87CEEB",
        monitoring: "#FFB347",
        media: "#DDA0DD",
        storage: "#B0C4DE",
        automation: "#D2B48C",
        dns: "#FFB6C1",
        bot: "#9370DB",
        api: "#98FB98"
    };
    return colors[type] || "#D3D3D3";
};

export default function InfraClient() {
    const [selectedCategory, setSelectedCategory] = useState("servers");

    return (
        <> 
                <Card className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500"># ecosystem</h2>
                    <p className="mb-2">
                        welcome to my ecosystem page, this is a overview of the devices, servers, and services that i use on a daily basis.
                    </p>
                    <p className="mb-2">
                        select a category by clicking the buttons below to see more information.
                    </p>
                    <div className="gap-2">
                        <p className={`cursor-pointer font-semibold group ${selectedCategory === "servers" ? "text-pink-500" : "text-white/50 hover:text-white/80"}`} onClick={() => setSelectedCategory("servers")}>
                            {'> '} <span className={selectedCategory === "servers" ? "text-white" : "text-white/50 group-hover:text-white/80"}>servers</span>
                        </p>
                        <p className={`cursor-pointer font-semibold group ${selectedCategory === "devices" ? "text-pink-500" : "text-white/50 hover:text-white/80"}`} onClick={() => setSelectedCategory("devices")}>
                            {'> '} <span className={selectedCategory === "devices" ? "text-white" : "text-white/50 group-hover:text-white/80"}>devices</span>
                        </p>
                        <p className={`cursor-pointer font-semibold group ${selectedCategory === "services" ? "text-pink-500" : "text-white/50 hover:text-white/80"}`} onClick={() => setSelectedCategory("services")}>
                            {'> '} <span className={selectedCategory === "services" ? "text-white" : "text-white/50 group-hover:text-white/80"}>services</span>
                        </p>
                    </div>
                </Card>
                {selectedCategory === "servers" && (
                    <>
                    <Card>
                        <h2 className="text-2xl font-semibold mb-2 text-pink-500"># servers</h2>
                        <p className="mb-2">
                            below is a list of my servers that i run and operate for private use and for public use.
                        </p>
                    </Card>
                    <Card style={{ border: `1px solid #ff037d` }}>
                        <h2 className="text-2xl font-semibold mb-2" style={{ color: "#ff037d" }}># router</h2>    
                        <p className="text-white/80">
                            <span style={{ color: "#ff037d" }}>{'>'}</span> description: <span className="text-white">Needs to be replaced with a better router, this one hangs up the whole network when downloading large files. Needs to be relocated to my homelab.</span>
                        </p>
                        <p className="text-white/80">
                            <span style={{ color: "#ff037d" }}>{'>'}</span> model: <span className="text-white">Asus RT-AC66U B1</span>
                        </p>
                        <p className="text-white/80">
                            <span style={{ color: "#ff037d" }}>{'>'}</span> internet: <span className="text-white">500 Mbps down/up</span>
                        </p>
                        <p className="text-white/80">
                            <span style={{ color: "#ff037d" }}>{'>'}</span> location: <span className="text-white">Sweden (home)</span>
                        </p>
                    </Card>
                    <Card style={{ border: `1px solid #03d5ff` }}>
                        <h2 className="text-2xl font-semibold mb-2" style={{ color: "#03d5ff" }}># network-switch</h2>    
                        <p className="text-white/80">
                            <span style={{ color: "#03d5ff" }}>{'>'}</span> description: <span className="text-white">52-port managed switch</span>
                        </p>
                        <p className="text-white/80">
                            <span style={{ color: "#03d5ff" }}>{'>'}</span> model: <span className="text-white">D-Link DGS-2000-52</span>
                        </p>
                        <p className="text-white/80">
                            <span style={{ color: "#03d5ff" }}>{'>'}</span> ports: <span className="text-white">48x Gigabit Ethernet + 4x SFP+ ports</span>
                        </p>
                        <p className="text-white/80">
                            <span style={{ color: "#03d5ff" }}>{'>'}</span> location: <span className="text-white">Sweden (home)</span>
                        </p>
                    </Card>
                    {servers.map((server) => (
                    <Card key={server.name} style={{ border: `1px solid ${server.color}` }}>
                        <h2 className="text-2xl font-semibold mb-2" style={{ color: server.color }}># {server.hostname}</h2>    
                        {server.description && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> description: <span className="text-white">{server.description}</span>
                            </p>
                        )}
                        {server.hostname && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> hostname: <span className="text-white">{server.hostname}</span>
                            </p>
                        )}
                        {server.localip && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> local ip: <span className="text-white">{server.localip}</span>
                            </p>
                        )}
                        {server.tailscaleip && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> tailscale ip: <span className="text-white">{server.tailscaleip}</span>
                            </p>
                        )}
                        {server.location && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> location: <span className="text-white">{server.location}</span>
                            </p>
                        )}
                        {server.status && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> status: <span className="text-green-400">{server.status}</span>
                            </p>
                        )}
                        {server.os && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> os: <span className="text-white">{server.os}</span>
                            </p>
                        )}
                        {server.cpu && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> cpu: <span className="text-white">{server.cpu}</span>
                            </p>
                        )}
                        {server.motherboard && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> motherboard: <span className="text-white">{server.motherboard}</span>
                            </p>
                        )}
                        {server.memory && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> memory: <span className="text-white">{server.memory}</span>
                            </p>
                        )}
                        {server.storage && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> storage: <span className="text-white">{server.storage}</span>
                            </p>
                        )}
                        {server.kvm && (
                            <p className="text-white/80">
                                <span style={{ color: server.color }}>{'>'}</span> kvm: <span className="text-white">{server.kvm}</span>
                            </p>
                        )}
                        {server.services && server.services.length > 0 && (
                            <div className="mt-3">
                                <p className="text-white/80 mb-2">
                                    <span style={{ color: server.color }}>{'>'}</span> services:
                                </p>
                                <div className=" bg-black/20 border border-white/10 p-3 font-mono text-sm">
                                    {server.services.sort((a, b) => a.name.localeCompare(b.name)).map((service, index) => (
                                        <div 
                                            key={index} 
                                            className="flex items-center justify-between py-1 border-b border-white/10 last:border-b-0"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span 
                                                    className="text-xs"
                                                    style={{ color: getServiceTypeColor(service.type) }}
                                                >
                                                    ●
                                                </span>
                                                <Tooltip text={service.note} className="text-white">{service.name}</Tooltip>
                                            </div>
                                            <span className="text-white/60">{service.port}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        </Card>
                    ))}
                    </>
                )}

                {selectedCategory === "devices" && (
                    <>
                    <Card>
                        <h2 className="text-2xl font-semibold mb-2 text-pink-500"># devices</h2>
                        <p className="mb-2">
                            below is a list of my devices that i use on a daily basis.
                        </p>
                    </Card>
                    {devices.map((device) => (
                    <Card key={device.name} style={{ border: `1px solid ${device.color}` }}>
                        <h2 className="text-2xl font-semibold mb-2" style={{ color: device.color }}># {device.name}</h2>
                        {device.device && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> device: <span className="text-white">{device.device}</span>
                            </p>
                        )}
                        {device.localip && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> local ip: <span className="text-white">{device.localip}</span>
                            </p>
                        )}
                        {device.tailscaleip && (    
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> tailscale ip: <span className="text-white">{device.tailscaleip}</span>
                            </p>
                        )}
                        {device.os && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> os: <span className="text-white">{device.os}</span>
                            </p>
                        )}
                        {device.cpu && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> cpu: <span className="text-white">{device.cpu}</span>
                            </p>
                        )}
                        {device.motherboard && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> motherboard: <span className="text-white">{device.motherboard}</span>
                            </p>
                        )}
                        {device.memory && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> memory: <span className="text-white">{device.memory}</span>
                            </p>
                        )}
                        {device.storage && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> storage: <span className="text-white">{device.storage}</span>
                            </p>
                        )}
                        {device.gpu && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> gpu: <span className="text-white">{device.gpu}</span>
                            </p>
                        )}
                        {device.case && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> case: <span className="text-white">{device.case}</span>
                            </p>
                        )}
                        {device.cooling && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> cooling: <span className="text-white">{device.cooling}</span>
                            </p>
                        )}
                        {device.psu && (
                            <p className="text-white/80">
                                <span style={{ color: device.color }}>{'>'}</span> psu: <span className="text-white">{device.psu}</span>
                            </p>
                        )}
                    </Card>
                ))}
                </>
                )}

                {selectedCategory === "services" && (
                    <Card className="">
                        <h2 className="text-2xl font-semibold mb-2 text-pink-500"># services</h2>
                        <p className="mb-4">
                            below is a list of services that i use on a daily basis.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {services.sort((a, b) => a.name.localeCompare(b.name)).map((service) => (
                                <div key={service.name} className="p-3 bg-black/20 border-white/10 border hover:border-white/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div 
                                            className="w-3 h-3" 
                                            style={{ backgroundColor: service.color }}
                                        ></div>
                                        <h3 className="font-semibold text-white">{service.name}</h3>
                                    </div>
                                    <p className="text-white/70 text-sm">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                )}
        </>
    )
}
