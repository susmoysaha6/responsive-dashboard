import React from 'react';
import Card from '../components/Card';

const Dashboard = () => {
    return (
        <div className='min-h-screen bg-gray-50 mt-2'>
            <h2 className='text-2xl font-semibold ml-12 pt-10'>Dashboard</h2>
            <h2 className=' font-semibold ml-12 my-5'>Company Status</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 mx-5'>
                <Card name="Total Employee" number="450" />
                <Card name="Attend Today" number="420" />
                <Card name="Employees on Leave " number="15" />
                <Card name="New Expense Request" number="5" />
            </div>

            <h2 className=' font-semibold ml-12 my-5'>Expense Report</h2>

        </div>
    );
};

export default Dashboard;