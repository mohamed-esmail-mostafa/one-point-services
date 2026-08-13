import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import {
    TrendingUp,
    TrendingDown,
    Users,
    ShoppingBag,
    CheckCircle2,
    Clock,
    DollarSign,
    Calendar,
    Download,
    Filter,
    MoreHorizontal,
    Search,
    Plus,
    ArrowUpRight,
    Layers,
    Activity,
    ShieldAlert,
    ChevronRight,
    Eye,
    FileText,
    Trash2,
    RefreshCw,
    Sparkles,
    Building2,
    Database,
    Cpu,
    HardDrive,
} from 'lucide-react';
import { AdminLayout } from '@/layouts/admin-layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Mock Data for Recent Orders
type Order = {
    id: string;
    customer: {
        name: string;
        email: string;
        avatar: string;
    };
    category: string;
    amount: string;
    status: 'Completed' | 'Processing' | 'Pending' | 'Cancelled';
    date: string;
};

const recentOrders: Order[] = [
    {
        id: 'ORD-8921',
        customer: {
            name: 'Sarah Jenkins',
            email: 'sarah.j@example.com',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        },
        category: 'Home Cleaning',
        amount: '$240.00',
        status: 'Completed',
        date: 'Today, 2:45 PM',
    },
    {
        id: 'ORD-8920',
        customer: {
            name: 'Michael Chen',
            email: 'm.chen@example.com',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        },
        category: 'Plumbing Repair',
        amount: '$180.50',
        status: 'Processing',
        date: 'Today, 1:15 PM',
    },
    {
        id: 'ORD-8919',
        customer: {
            name: 'Elena Rostova',
            email: 'elena.r@example.com',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        },
        category: 'Electrical Setup',
        amount: '$420.00',
        status: 'Pending',
        date: 'Yesterday, 5:30 PM',
    },
    {
        id: 'ORD-8918',
        customer: {
            name: 'David Miller',
            email: 'd.miller@example.com',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        },
        category: 'AC Maintenance',
        amount: '$150.00',
        status: 'Completed',
        date: 'Yesterday, 11:20 AM',
    },
    {
        id: 'ORD-8917',
        customer: {
            name: 'Amanda Taylor',
            email: 'a.taylor@example.com',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
        },
        category: 'Painting Service',
        amount: '$650.00',
        status: 'Cancelled',
        date: 'Aug 11, 2026',
    },
];

export default function AdminDashboard() {
    const [timeframe, setTimeframe] = useState<'today' | '7d' | '30d' | '1y'>('30d');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredOrders = recentOrders.filter((order) => {
        const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase();
        const matchesSearch =
            order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const getStatusBadge = (status: Order['status']) => {
        switch (status) {
            case 'Completed':
                return (
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 gap-1 font-medium">
                        <CheckCircle2 className="h-3 w-3" /> Completed
                    </Badge>
                );
            case 'Processing':
                return (
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30 gap-1 font-medium">
                        <Clock className="h-3 w-3 animate-spin" /> Processing
                    </Badge>
                );
            case 'Pending':
                return (
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30 gap-1 font-medium">
                        <Clock className="h-3 w-3" /> Pending
                    </Badge>
                );
            case 'Cancelled':
                return (
                    <Badge variant="outline" className="bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30 gap-1 font-medium">
                        Cancelled
                    </Badge>
                );
        }
    };

    return (
        <AdminLayout>
            <Head title="Admin Dashboard | One Services" />

            {/* Welcome & Top Controls Banner */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-card via-card to-accent/30 p-6 rounded-2xl border border-border/80 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
                <div className="space-y-1 relative z-10">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                            Dashboard Overview
                        </h1>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-semibold gap-1 text-xs">
                            <Sparkles className="h-3 w-3" /> Live Updates
                        </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Welcome back, Mohamed 👋 Here is what is happening across your platform today.
                    </p>
                </div>

                {/* Timeframe Selector & Export Button */}
                <div className="flex flex-wrap items-center gap-2 relative z-10">
                    <div className="flex items-center rounded-xl bg-accent/60 p-1 border border-border/60">
                        {(['today', '7d', '30d', '1y'] as const).map((tf) => (
                            <button
                                key={tf}
                                onClick={() => setTimeframe(tf)}
                                className={cn(
                                    "px-3 py-1.5 text-xs font-semibold rounded-lg transition-all capitalize",
                                    timeframe === tf
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {tf === 'today' ? 'Today' : tf === '7d' ? '7 Days' : tf === '30d' ? '30 Days' : '1 Year'}
                            </button>
                        ))}
                    </div>

                    <Button variant="outline" size="sm" className="h-9 gap-1.5 rounded-xl border-border/80 font-medium">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        <span>Export</span>
                    </Button>
                </div>
            </div>

            {/* 4 KPI Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Total Revenue */}
                <Card className="rounded-2xl border-border/80 bg-card hover:border-primary/40 transition-all duration-200 shadow-sm relative overflow-hidden group">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Total Revenue
                        </CardTitle>
                        <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <DollarSign className="h-5 w-5" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="text-2xl sm:text-3xl font-bold tracking-tight">$48,250.00</div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            <span className="flex items-center gap-0.5 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">
                                <TrendingUp className="h-3.5 w-3.5" /> +14.2%
                            </span>
                            <span className="text-muted-foreground">vs last month</span>
                        </div>
                        {/* Mini visual indicator */}
                        <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden mt-3">
                            <div className="bg-emerald-500 h-full w-[78%] rounded-full" />
                        </div>
                    </CardContent>
                </Card>

                {/* Total Orders */}
                <Card className="rounded-2xl border-border/80 bg-card hover:border-primary/40 transition-all duration-200 shadow-sm relative overflow-hidden group">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Total Orders
                        </CardTitle>
                        <div className="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ShoppingBag className="h-5 w-5" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="text-2xl sm:text-3xl font-bold tracking-tight">1,428</div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                            <span className="flex items-center gap-0.5 bg-blue-500/10 px-1.5 py-0.5 rounded-md">
                                <TrendingUp className="h-3.5 w-3.5" /> +8.6%
                            </span>
                            <span className="text-muted-foreground">vs last week</span>
                        </div>
                        <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden mt-3">
                            <div className="bg-blue-500 h-full w-[65%] rounded-full" />
                        </div>
                    </CardContent>
                </Card>

                {/* Active Customers */}
                <Card className="rounded-2xl border-border/80 bg-card hover:border-primary/40 transition-all duration-200 shadow-sm relative overflow-hidden group">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Active Customers
                        </CardTitle>
                        <div className="h-9 w-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Users className="h-5 w-5" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="text-2xl sm:text-3xl font-bold tracking-tight">3,890</div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400">
                            <span className="flex items-center gap-0.5 bg-purple-500/10 px-1.5 py-0.5 rounded-md">
                                <TrendingUp className="h-3.5 w-3.5" /> +22.4%
                            </span>
                            <span className="text-muted-foreground">new accounts</span>
                        </div>
                        <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden mt-3">
                            <div className="bg-purple-500 h-full w-[84%] rounded-full" />
                        </div>
                    </CardContent>
                </Card>

                {/* Service Completion Rate */}
                <Card className="rounded-2xl border-border/80 bg-card hover:border-primary/40 transition-all duration-200 shadow-sm relative overflow-hidden group">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Completion Rate
                        </CardTitle>
                        <div className="h-9 w-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="h-5 w-5" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="text-2xl sm:text-3xl font-bold tracking-tight">98.4%</div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                            <span className="flex items-center gap-0.5 bg-amber-500/10 px-1.5 py-0.5 rounded-md">
                                <TrendingUp className="h-3.5 w-3.5" /> +3.1%
                            </span>
                            <span className="text-muted-foreground">efficiency</span>
                        </div>
                        <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden mt-3">
                            <div className="bg-amber-500 h-full w-[94%] rounded-full" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Visual Section: Chart & Side Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Visual Analytics Chart (2/3 width on desktop) */}
                <Card className="lg:col-span-2 rounded-2xl border-border/80 bg-card shadow-sm flex flex-col justify-between">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-border/60 pb-4">
                        <div>
                            <CardTitle className="text-base font-bold text-foreground">
                                Revenue & Booking Growth
                            </CardTitle>
                            <CardDescription className="text-xs text-muted-foreground mt-0.5">
                                Monthly revenue performance across all service categories.
                            </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs font-medium gap-1 bg-accent/50">
                                <span className="h-2 w-2 rounded-full bg-primary inline-block" /> Revenue
                            </Badge>
                            <Badge variant="outline" className="text-xs font-medium gap-1 bg-accent/50">
                                <span className="h-2 w-2 rounded-full bg-indigo-400 inline-block" /> Bookings
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        {/* Custom CSS/SVG Visual Bar & Trend Chart Mockup */}
                        <div className="h-64 w-full flex flex-col justify-end space-y-2">
                            {/* Grid Bar Chart Visualization */}
                            <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 pt-4 border-b border-border/60">
                                {[
                                    { month: 'Jan', val1: 40, val2: 60, rev: '$18k' },
                                    { month: 'Feb', val1: 55, val2: 70, rev: '$24k' },
                                    { month: 'Mar', val1: 35, val2: 50, rev: '$15k' },
                                    { month: 'Apr', val1: 70, val2: 85, rev: '$32k' },
                                    { month: 'May', val1: 60, val2: 75, rev: '$28k' },
                                    { month: 'Jun', val1: 85, val2: 95, rev: '$42k' },
                                    { month: 'Jul', val1: 75, val2: 90, rev: '$38k' },
                                    { month: 'Aug', val1: 90, val2: 100, rev: '$48k' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
                                        {/* Hover Tooltip Value */}
                                        <span className="opacity-0 group-hover:opacity-100 text-[10px] font-bold text-primary bg-accent px-1.5 py-0.5 rounded shadow-sm transition-opacity">
                                            {item.rev}
                                        </span>
                                        {/* Bars */}
                                        <div className="w-full flex items-end justify-center gap-1 h-full max-h-48">
                                            <div
                                                className="w-1/2 bg-indigo-400/70 group-hover:bg-indigo-400 rounded-t-md transition-all duration-300"
                                                style={{ height: `${item.val1}%` }}
                                            />
                                            <div
                                                className="w-1/2 bg-gradient-to-t from-primary/80 to-primary rounded-t-md group-hover:scale-y-105 origin-bottom transition-all duration-300"
                                                style={{ height: `${item.val2}%` }}
                                            />
                                        </div>
                                        <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground">
                                            {item.month}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="border-t border-border/60 bg-muted/20 px-6 py-3 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5 font-medium">
                            <Activity className="h-4 w-4 text-emerald-500" /> Projected Q3 growth on track (+18.5%)
                        </span>
                        <Button variant="ghost" size="sm" className="h-7 text-xs text-primary gap-1">
                            Detailed Analytics <ChevronRight className="h-3.5 w-3.5" />
                        </Button>
                    </CardFooter>
                </Card>

                {/* Side Widgets (1/3 width on desktop) */}
                <div className="space-y-6">
                    {/* Quick Admin Actions */}
                    <Card className="rounded-2xl border-border/80 bg-card shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-bold text-foreground">
                                Quick Admin Shortcuts
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 rounded-xl hover:border-primary/50 hover:bg-accent">
                                <Layers className="h-5 w-5 text-indigo-500" />
                                <span className="text-xs font-semibold">New Category</span>
                            </Button>
                            <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 rounded-xl hover:border-primary/50 hover:bg-accent">
                                <ShoppingBag className="h-5 w-5 text-emerald-500" />
                                <span className="text-xs font-semibold">Manage Services</span>
                            </Button>
                            <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 rounded-xl hover:border-primary/50 hover:bg-accent">
                                <Users className="h-5 w-5 text-purple-500" />
                                <span className="text-xs font-semibold">View Users</span>
                            </Button>
                            <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 rounded-xl hover:border-primary/50 hover:bg-accent">
                                <FileText className="h-5 w-5 text-amber-500" />
                                <span className="text-xs font-semibold">System Logs</span>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* System Server Health */}
                    <Card className="rounded-2xl border-border/80 bg-card shadow-sm">
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-bold text-foreground">
                                    System Performance
                                </CardTitle>
                                <Badge variant="outline" className="text-[10px] text-emerald-500 border-emerald-500/30 bg-emerald-500/10">
                                    Optimal
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3 text-xs">
                            <div className="space-y-1">
                                <div className="flex justify-between font-medium">
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                        <Cpu className="h-3.5 w-3.5" /> CPU Load
                                    </span>
                                    <span>28%</span>
                                </div>
                                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="bg-emerald-500 h-full w-[28%]" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between font-medium">
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                        <Activity className="h-3.5 w-3.5" /> Memory Usage
                                    </span>
                                    <span>42%</span>
                                </div>
                                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="bg-indigo-500 h-full w-[42%]" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between font-medium">
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                        <HardDrive className="h-3.5 w-3.5" /> Disk Storage
                                    </span>
                                    <span>68% (320 GB Free)</span>
                                </div>
                                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="bg-amber-500 h-full w-[68%]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Data Table Section: Recent Orders & Management */}
            <Card className="rounded-2xl border-border/80 bg-card shadow-sm">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/60 pb-4">
                    <div>
                        <CardTitle className="text-base font-bold text-foreground">
                            Recent Orders & Bookings
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground mt-0.5">
                            Manage recent customer requests and service status updates.
                        </CardDescription>
                    </div>

                    {/* Table Filters & Search */}
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Search Input */}
                        <div className="relative">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                            <Input
                                placeholder="Search customer, ID..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-8 h-8 text-xs w-44 sm:w-56 rounded-lg bg-accent/40 border-border/60"
                            />
                        </div>

                        {/* Status Filter Dropdown */}
                        <div className="flex items-center rounded-lg bg-accent/60 p-0.5 border border-border/60">
                            {['all', 'completed', 'processing', 'pending'].map((st) => (
                                <button
                                    key={st}
                                    onClick={() => setStatusFilter(st)}
                                    className={cn(
                                        "px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all capitalize",
                                        statusFilter === st
                                            ? "bg-background text-foreground shadow-xs"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {st}
                                </button>
                            ))}
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr className="border-b border-border/60 bg-muted/30 text-muted-foreground font-semibold">
                                    <th className="py-3 px-4 sm:px-6">Order ID</th>
                                    <th className="py-3 px-4 sm:px-6">Customer</th>
                                    <th className="py-3 px-4 sm:px-6">Service Category</th>
                                    <th className="py-3 px-4 sm:px-6">Amount</th>
                                    <th className="py-3 px-4 sm:px-6">Status</th>
                                    <th className="py-3 px-4 sm:px-6">Date</th>
                                    <th className="py-3 px-4 sm:px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {filteredOrders.length > 0 ? (
                                    filteredOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-accent/40 transition-colors group">
                                            <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-foreground">
                                                {order.id}
                                            </td>
                                            <td className="py-3.5 px-4 sm:px-6">
                                                <div className="flex items-center gap-2.5">
                                                    <Avatar className="h-8 w-8 border border-border">
                                                        <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
                                                        <AvatarFallback>{order.customer.name.substring(0, 2)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <span className="font-semibold text-foreground">{order.customer.name}</span>
                                                        <span className="text-[10px] text-muted-foreground">{order.customer.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3.5 px-4 sm:px-6 font-medium text-foreground">
                                                {order.category}
                                            </td>
                                            <td className="py-3.5 px-4 sm:px-6 font-semibold text-foreground">
                                                {order.amount}
                                            </td>
                                            <td className="py-3.5 px-4 sm:px-6">
                                                {getStatusBadge(order.status)}
                                            </td>
                                            <td className="py-3.5 px-4 sm:px-6 text-muted-foreground">
                                                {order.date}
                                            </td>
                                            <td className="py-3.5 px-4 sm:px-6 text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg text-muted-foreground hover:text-foreground">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-40 rounded-xl p-1">
                                                        <DropdownMenuItem className="gap-2 text-xs cursor-pointer">
                                                            <Eye className="h-3.5 w-3.5" /> View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="gap-2 text-xs cursor-pointer">
                                                            <FileText className="h-3.5 w-3.5" /> Invoice
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="gap-2 text-xs cursor-pointer text-destructive focus:bg-destructive/10">
                                                            <Trash2 className="h-3.5 w-3.5" /> Cancel Order
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="py-8 text-center text-muted-foreground">
                                            No matching orders found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>

                <CardFooter className="border-t border-border/60 px-6 py-3.5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Showing {filteredOrders.length} of {recentOrders.length} entries</span>
                    <div className="flex items-center gap-1">
                        <Button variant="outline" size="sm" className="h-7 px-2.5 text-xs rounded-lg" disabled>
                            Previous
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 px-2.5 text-xs rounded-lg">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </AdminLayout>
    );
}
