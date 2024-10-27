import React, { useEffect, useState } from 'react';
import api from '../services/api';

function RuleList() {
    const [rules, setRules] = useState([]);

    useEffect(() => {
        const fetchRules = async () => {
            try {
                const response = await api.get('/');
                setRules(response.data);
            } catch (error) {
                console.error('Error fetching rules:', error);
            }
        };
        fetchRules();
    }, []);

    return (
        <div>
            <h2>Existing Rules</h2>
            <ul>
                {rules.map((rule) => (
                    <li key={rule._id}>{rule.rule}</li>
                ))}
            </ul>
        </div>
    );
}

export default RuleList;
