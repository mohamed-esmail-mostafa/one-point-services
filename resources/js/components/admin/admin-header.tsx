import React from 'react';
import {
    Search,
    Bell,
    Plus,
    Menu,
    ChevronDown,
    Settings,
    LogOut,
    User,
    Shield,
    Sparkles,
    CheckCircle2,
    Clock,
    AlertCircle,
    Layers,
    ShoppingBag,
    UserPlus,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type AdminHeaderProps = {
    collapsed: boolean;
    onToggleCollapse: () => void;
    onOpenMobile: () => void;
};

export function AdminHeader({
    collapsed,
    onToggleCollapse,
    onOpenMobile,
}: AdminHeaderProps) {
    return (
        <header
            className={cn(
                "sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-border/80 bg-background/95 backdrop-blur-md px-4 md:px-6 transition-all duration-300",
                collapsed ? "md:pl-24" : "md:pl-68"
            )}
        >
            {/* Left Section: Sidebar Toggle & Global Search */}
            <div className="flex items-center gap-3 flex-1 max-w-md">
                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onOpenMobile}
                    className="md:hidden h-9 w-9 text-muted-foreground hover:text-foreground rounded-lg"
                    aria-label="Open Mobile Menu"
                >
                    <Menu className="h-5 w-5" />
                </Button>

                {/* Desktop Collapse Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggleCollapse}
                    className="hidden md:flex h-9 w-9 text-muted-foreground hover:text-foreground rounded-lg"
                    aria-label="Toggle Sidebar"
                >
                    <Menu className="h-5 w-5" />
                </Button>

                {/* Search Bar */}
                <div className="relative w-full max-w-xs sm:max-w-sm hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search services, orders, users..."
                        className="pl-9 pr-12 h-9 text-sm bg-accent/40 border-border/60 focus-visible:bg-background transition-colors rounded-xl"
                    />
                    <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </div>
            </div>

            {/* Right Section: System Status, Quick Action, Notifications, User Profile */}
            <div className="flex items-center gap-2 sm:gap-3">
                {/* System Operational Status Pill */}
                <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Systems Normal</span>
                </div>

                {/* Quick Create Action Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="sm"
                            className="h-9 gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm rounded-xl px-3"
                        >
                            <Plus className="h-4 w-4" />
                            <span className="hidden sm:inline">Quick Action</span>
                            <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52 rounded-xl p-1.5 shadow-lg">
                        <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground uppercase px-2 py-1.5">
                            Create New
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="-mx-1 my-1" />
                        <DropdownMenuItem className="gap-2.5 cursor-pointer rounded-lg px-2.5 py-2 text-sm font-medium">
                            <Layers className="h-4 w-4 text-indigo-500" />
                            <span>Add Category</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2.5 cursor-pointer rounded-lg px-2.5 py-2 text-sm font-medium">
                            <ShoppingBag className="h-4 w-4 text-emerald-500" />
                            <span>Create Order</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2.5 cursor-pointer rounded-lg px-2.5 py-2 text-sm font-medium">
                            <UserPlus className="h-4 w-4 text-amber-500" />
                            <span>Invite Admin</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Notifications Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative h-9 w-9 text-muted-foreground hover:text-foreground rounded-xl"
                            aria-label="Notifications"
                        >
                            <Bell className="h-4 w-4" />
                            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 rounded-2xl p-0 shadow-xl border-border/80 overflow-hidden">
                        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 bg-muted/30">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">Notifications</span>
                                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">3 New</Badge>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 text-[11px] text-primary px-2">
                                Mark all as read
                            </Button>
                        </div>
                        <div className="divide-y divide-border/40 max-h-72 overflow-y-auto">
                            <div className="flex items-start gap-3 p-3 hover:bg-accent/40 transition-colors cursor-pointer">
                                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                                    <ShoppingBag className="h-4 w-4" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="text-xs font-semibold leading-none text-foreground">New Order #1084</p>
                                    <p className="text-[11px] text-muted-foreground line-clamp-1">Service booking by Sarah Jenkins ($240.00)</p>
                                    <span className="text-[10px] text-muted-foreground/70 flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> 2 minutes ago
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 hover:bg-accent/40 transition-colors cursor-pointer">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-0.5">
                                    <UserPlus className="h-4 w-4" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="text-xs font-semibold leading-none text-foreground">New Customer Registered</p>
                                    <p className="text-[11px] text-muted-foreground line-clamp-1">Alex Rivera created a new account</p>
                                    <span className="text-[10px] text-muted-foreground/70 flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> 45 minutes ago
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 hover:bg-accent/40 transition-colors cursor-pointer">
                                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mt-0.5">
                                    <AlertCircle className="h-4 w-4" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="text-xs font-semibold leading-none text-foreground">System Storage Alert</p>
                                    <p className="text-[11px] text-muted-foreground line-clamp-1">Database auto-backup completed successfully</p>
                                    <span className="text-[10px] text-muted-foreground/70 flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> 3 hours ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-border/60 p-2 text-center bg-muted/20">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground hover:text-foreground h-7">
                                View all notifications
                            </Button>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* User Profile Dropdown Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-9 gap-2 pl-1 pr-2.5 rounded-xl hover:bg-accent focus-visible:ring-0"
                        >
                            <Avatar className="h-7 w-7 border border-border">
                                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Admin" />
                                <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">AD</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-semibold text-foreground hidden md:inline truncate max-w-28">
                                Mohamed Admin
                            </span>
                            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 rounded-2xl p-1.5 shadow-xl border-border/80">
                        <DropdownMenuLabel className="font-normal p-2">
                            <div className="flex flex-col space-y-1">
                                <p className="text-xs font-bold leading-none text-foreground flex items-center gap-1">
                                    Mohamed Admin
                                    <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-indigo-500/30 text-indigo-500 bg-indigo-500/5">
                                        Super Admin
                                    </Badge>
                                </p>
                                <p className="text-[11px] leading-none text-muted-foreground">
                                    mohamed@oneservices.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="-mx-1 my-1" />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="gap-2 cursor-pointer rounded-xl px-2.5 py-2 text-xs font-medium">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span>My Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 cursor-pointer rounded-xl px-2.5 py-2 text-xs font-medium">
                                <Settings className="h-4 w-4 text-muted-foreground" />
                                <span>Account Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 cursor-pointer rounded-xl px-2.5 py-2 text-xs font-medium">
                                <Shield className="h-4 w-4 text-muted-foreground" />
                                <span>Security & Roles</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className="-mx-1 my-1" />
                        <DropdownMenuItem className="gap-2 cursor-pointer rounded-xl px-2.5 py-2 text-xs font-medium text-destructive focus:bg-destructive/10 focus:text-destructive">
                            <LogOut className="h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
