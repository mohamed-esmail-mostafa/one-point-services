import React from 'react';
import { Link } from '@inertiajs/react';
import {
    LayoutGrid,
    TrendingUp,
    Users,
    ShoppingBag,
    Layers,
    FolderKanban,
    Image as ImageIcon,
    Settings,
    ShieldCheck,
    FileText,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Sparkles,
    CheckCircle2,
    Building2,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export type NavItemConfig = {
    title: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
    badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
    isActive?: boolean;
};

export type NavGroupConfig = {
    label: string;
    items: NavItemConfig[];
};

const navigationGroups: NavGroupConfig[] = [
    {
        label: 'Overview',
        items: [
            { title: 'Dashboard', href: '#', icon: LayoutGrid, isActive: true },
            { title: 'Analytics', href: '#', icon: TrendingUp },
            { title: 'Reports', href: '#', icon: FileText },
        ],
    },
    {
        label: 'Management',
        items: [
            { title: 'Categories & Services', href: '#', icon: Layers, badge: 'New' },
            { title: 'Orders & Requests', href: '#', icon: ShoppingBag, badge: '12', badgeVariant: 'secondary' },
            { title: 'Customers', href: '#', icon: Users },
            { title: 'Media Library', href: '#', icon: ImageIcon },
        ],
    },
    {
        label: 'System',
        items: [
            { title: 'Settings', href: '#', icon: Settings },
            { title: 'Roles & Security', href: '#', icon: ShieldCheck },
            { title: 'Audit Logs', href: '#', icon: FolderKanban },
            { title: 'Help & Support', href: '#', icon: HelpCircle },
        ],
    },
];

type AdminSidebarProps = {
    collapsed: boolean;
    onToggleCollapse: () => void;
    mobileOpen: boolean;
    setMobileOpen: (open: boolean) => void;
};

export function AdminSidebar({
    collapsed,
    onToggleCollapse,
    mobileOpen,
    setMobileOpen,
}: AdminSidebarProps) {
    const SidebarContentInner = () => (
        <div className="flex h-full flex-col justify-between overflow-hidden py-4">
            {/* Header / Brand */}
            <div className="px-4">
                <div className={cn("flex items-center gap-3 transition-all duration-300", collapsed ? "justify-center" : "justify-between")}>
                    <Link href="#" className="flex items-center gap-3 group">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            <Building2 className="h-5 w-5" />
                        </div>
                        {!collapsed && (
                            <div className="flex flex-col">
                                <span className="font-bold text-base tracking-tight text-foreground leading-tight">
                                    One Services
                                </span>
                                <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
                                    Admin Portal <Sparkles className="h-3 w-3 text-amber-500 inline" />
                                </span>
                            </div>
                        )}
                    </Link>

                    {/* Toggle Button for Desktop */}
                    {!collapsed && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onToggleCollapse}
                            className="hidden md:flex h-8 w-8 text-muted-foreground hover:text-foreground rounded-lg"
                            title="Collapse Sidebar"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>

            {/* Nav Menu */}
            <div className="flex-1 overflow-y-auto px-3 py-6 space-y-6 scrollbar-none">
                <TooltipProvider delayDuration={0}>
                    {navigationGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-1">
                            {!collapsed && (
                                <h4 className="px-3 text-[11px] font-semibold tracking-wider text-muted-foreground/70 uppercase">
                                    {group.label}
                                </h4>
                            )}
                            <div className="space-y-1">
                                {group.items.map((item, itemIdx) => {
                                    const Icon = item.icon;
                                    const linkContent = (
                                        <a
                                            key={itemIdx}
                                            href={item.href}
                                            className={cn(
                                                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 relative",
                                                item.isActive
                                                    ? "bg-primary text-primary-foreground font-semibold shadow-sm shadow-primary/20"
                                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                                collapsed && "justify-center px-2"
                                            )}
                                        >
                                            <Icon className={cn("h-4 w-4 shrink-0 transition-transform group-hover:scale-110", item.isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                                            {!collapsed && (
                                                <span className="truncate flex-1">{item.title}</span>
                                            )}
                                            {!collapsed && item.badge && (
                                                <Badge
                                                    variant={item.badgeVariant || (item.isActive ? "secondary" : "default")}
                                                    className="ml-auto text-[10px] px-1.5 py-0 h-4 min-w-4 justify-center"
                                                >
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </a>
                                    );

                                    if (collapsed) {
                                        return (
                                            <Tooltip key={itemIdx}>
                                                <TooltipTrigger asChild>
                                                    {linkContent}
                                                </TooltipTrigger>
                                                <TooltipContent side="right" className="flex items-center gap-2 font-medium">
                                                    {item.title}
                                                    {item.badge && (
                                                        <Badge variant="secondary" className="text-[10px] px-1 py-0">
                                                            {item.badge}
                                                        </Badge>
                                                    )}
                                                </TooltipContent>
                                            </Tooltip>
                                        );
                                    }

                                    return linkContent;
                                })}
                            </div>
                        </div>
                    ))}
                </TooltipProvider>
            </div>

            {/* Sidebar Footer */}
            <div className="border-t border-border/60 p-3">
                {collapsed ? (
                    <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-8 w-8 border border-border">
                            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Admin" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onToggleCollapse}
                            className="hidden md:flex h-8 w-8 text-muted-foreground hover:text-foreground"
                            title="Expand Sidebar"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                ) : (
                    <div className="flex items-center justify-between rounded-xl bg-accent/50 p-2.5 border border-border/40">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="relative shrink-0">
                                <Avatar className="h-9 w-9 border border-background">
                                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Admin" />
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">AD</AvatarFallback>
                                </Avatar>
                                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
                            </div>
                            <div className="flex flex-col min-w-0 truncate">
                                <span className="text-xs font-semibold text-foreground truncate flex items-center gap-1">
                                    Mohamed Admin
                                    <CheckCircle2 className="h-3 w-3 text-blue-500 inline shrink-0" />
                                </span>
                                <span className="text-[11px] text-muted-foreground truncate">
                                    mohamed@oneservices.com
                                </span>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg"
                            title="Log Out"
                        >
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Fixed Sidebar */}
            <aside
                className={cn(
                    "hidden md:flex flex-col fixed inset-y-0 left-0 z-30 bg-card border-r border-border/80 transition-all duration-300 ease-in-out shadow-sm",
                    collapsed ? "w-20" : "w-64"
                )}
            >
                <SidebarContentInner />
            </aside>

            {/* Mobile Sheet Drawer */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetContent side="left" className="p-0 w-72 bg-card border-r border-border">
                    <SheetHeader className="sr-only">
                        <SheetTitle>Admin Menu</SheetTitle>
                    </SheetHeader>
                    <SidebarContentInner />
                </SheetContent>
            </Sheet>
        </>
    );
}
