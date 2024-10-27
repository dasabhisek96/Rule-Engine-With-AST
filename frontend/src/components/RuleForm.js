import React, { useState } from 'react';
import api from '../services/api';

function RuleForm() {
    const [rule, setRule] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/create', { rule });
            alert('Rule created successfully');
            setRule('');
        } catch (error) {
            console.error('Error creating rule:', error);
            alert('Failed to create rule');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={rule}
                onChange={(e) => setRule(e.target.value)}
                placeholder="Enter rule string"
                required
            />
            <button type="submit">Create Rule</button>
        </form>
    );
}

export default RuleForm;
