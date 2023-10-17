/* eslint-disable no-unused-vars */
import React from 'react';
import { Bot } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Image } from 'lucide-react';
import { Code, Search, GitMerge, CheckCircle2, KeyRound, Database, AreaChart, ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
    {
        label: 'Conversation',
        icon: Bot,
        href: '/conversation',
        size: '32px',
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: 'Text Summarizer',
        icon: Newspaper,
        href: '/text',
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        label: 'Image Generation',
        icon: Image,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: '/image',
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: '/code',
    },
];


const DashboardComp = () => {
    return (
        <div className='w-full bg-white h-[60rem]'>
            <div className="mb-8 space-y-4 mt-8">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-slate-900">
                    Data Governance Capabilities
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center text-slate-900">
                </p>
            </div>
            <div className='px-4 md:px-10 lg:px-32 grid grid-flow-row grid-cols-3 gap-5'>
                <Link to="/conversation">
                    <div className="max-w-sm p-6 h-[14rem] items-center justify-center text-center bg-white border border-gray-200 rounded-lg shadow  transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex justify-center items-center mb-8">
                            <div className=""><Search  className="h-14 w-14" /></div>
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Search Columns</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Find existing column names and definitions</p>
                    </div>
                </Link>
                <Link to="/conversation">
                    <div className="max-w-sm p-6 h-[14rem] items-center justify-center text-center bg-white border border-gray-200 rounded-lg shadow  transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex justify-center items-center mb-8">
                            <div className=""><CheckCircle2  className="h-14 w-14" /></div>
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Syntax Checker</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Check and fix syntax for column  definitions</p>
                    </div>
                </Link>
                <Link to="/conversation">
                    <div className="max-w-sm p-6 h-[14rem] items-center justify-center text-center bg-white border border-gray-200 rounded-lg shadow  transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex justify-center items-center mb-8">
                            <div className=""><KeyRound  className="h-14 w-14" /></div>
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Key Checker</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Verify Primary Key, Foreign Key, Sort Key, and Dist Key</p>
                    </div>
                </Link>
                <Link to="/conversation">
                    <div className="max-w-sm p-6 h-[14rem] items-center justify-center text-center bg-white border border-gray-200 rounded-lg shadow  transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex justify-center items-center mb-8">
                            <div className=""><GitMerge  className="h-14 w-14" /></div>
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Merge and Promote</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Merge Channels and promote from DEV to QA to Production</p>
                    </div>
                </Link>
                <Link to="/conversation">
                    <div className="max-w-sm p-6 h-[14rem] items-center justify-center text-center bg-white border border-gray-200 rounded-lg shadow  transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex justify-center items-center mb-8">
                            <div className=""><ListChecks  className="h-14 w-14" /></div>
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Workflow and Approval</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Manage workflows with approval processes and notifications</p>
                    </div>
                </Link>
                <Link to="/conversation">
                    <div className="max-w-sm p-6 h-[14rem] items-center justify-center text-center bg-white border border-gray-200 rounded-lg shadow  transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex justify-center items-center mb-8">
                            <div className=""><AreaChart  className="h-14 w-14" /></div>
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Performance Metrics</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">View basic RDS-related performance metrics</p>
                    </div>
                </Link>
                <Link to="/conversation">
                    <div className="max-w-sm p-6 h-[16rem] items-center justify-center text-center bg-white border border-gray-200 rounded-lg shadow  transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex justify-center items-center mb-8">
                            <div className=""><Database  className="h-14 w-14" /></div>
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">RDS Adoption and Usage</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Montior the adoption and usage of RDS</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default DashboardComp;