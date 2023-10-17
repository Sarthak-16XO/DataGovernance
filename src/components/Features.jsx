/* eslint-disable no-unused-vars */
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Code, Search, GitMerge, CheckCircle2, KeyRound, Database, AreaChart, ListChecks } from 'lucide-react';


const features = [
    {
        name: 'Workflow and Approval',
        description:
            'Manage workflows with approval processes and notifications.',
        icon: ListChecks,
    },
    {
        name: 'Syntax Checker',
        description:
            'Check and fix syntax for column  definitions.',
        icon: Code,
    },
    {
        name: 'Performance Metrics',
        description:
            'View basic RDS-related performance metrics.',
        icon: AreaChart,
    },
    {
        name: 'RDS Adoption and Usage',
        description:
            'Montior the adoption and usage of RDS.',
        icon: Database,
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Safeguarding Your Digital Assets through Effective Data Governance
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our experts help you implement data governance best practices to drive business success and safeguard your digital assets.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}