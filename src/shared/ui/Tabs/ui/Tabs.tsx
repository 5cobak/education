import React from 'react';
import s from './index.scss';

export type TabItem = {
    label: string;
    value: React.ReactNode;
};

export type TabsProps = {
    tabs: TabItem[];
    activeTab: TabItem;
    onChange?: (label: string) => void;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
    const handleTabClick = (label: string) => {
        onChange?.(label);
    };

    return (
        <div className={s.container}>
            <div className={s.tab}>
                {tabs.map((tab) => (
                    <button key={tab.label} onClick={() => handleTabClick(tab.label)}>
                        {tab.value}
                    </button>
                ))}
            </div>
        </div>
    );
};
