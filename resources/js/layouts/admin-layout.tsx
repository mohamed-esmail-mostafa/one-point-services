import React, { useState } from 'react';
import { AdminHeader } from '@/components/admin/admin-header';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { cn } from '@/lib/utils';

type AdminLayoutProps = {
    children: React.ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-neutral-50/60 dark:bg-neutral-950 text-foreground flex flex-col font-sans antialiased">
            {/* Sidebar Component */}
            <AdminSidebar
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed(!collapsed)}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            {/* Header Component */}
            <AdminHeader
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed(!collapsed)}
                onOpenMobile={() => setMobileOpen(true)}
            />

            {/* Main Content Area */}
            <main
                className={cn(
                    "flex-1 transition-all duration-300 ease-in-out p-4 sm:p-6 lg:p-8 space-y-6 w-full",
                    collapsed ? "md:pl-24" : "md:pl-68"
                )}
            >
                <div className="mx-auto max-w-7xl space-y-6">
                    {children}
                </div>
            </main>

            {/* Admin Footer */}
            <footer
                className={cn(
                    "border-t border-border/60 bg-background/50 py-4 px-6 text-center text-xs text-muted-foreground transition-all duration-300",
                    collapsed ? "md:pl-24" : "md:pl-68"
                )}
            >
                <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span>© {new Date().getFullYear()} One Services. All rights reserved.</span>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">System Status</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AdminLayout;
