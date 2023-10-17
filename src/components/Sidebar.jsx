/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Bot, Merge } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Image } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Search, GitMerge, CheckCircle2, KeyRound, Database, AreaChart, ListChecks } from 'lucide-react';

function Siderbar() {

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="w-full h-screen sticky top-0 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-[55rem] px-3 py-4 overflow-y-auto bg-[#eef3f7] dark:bg-gray-900 rounded-tr-lg">
        <ul className="space-y-4 mt-4">
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <LayoutDashboard />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Dashboard
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <Search />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Search Columns
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <CheckCircle2 />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Syntax Checker
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <KeyRound />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Key Checker
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <Merge />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Merge and Promote
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <ListChecks />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Workflow and Approval
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <AreaChart />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Performance Metrics
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <Database />
              <span className="flex-1 ml-3 whitespace-nowrap">
                RDS Adoption and Usage
              </span>
            </Link>
          </li>

        </ul>
      </div>
    </aside>
  );
}

export default Siderbar;