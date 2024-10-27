import React, { useState } from 'react';
import api from '../services/api';

function RuleEvaluator() {
    const [ruleId, setRuleId] = useState('');
    const [data, setData] = useState({ age: '', department: '', salary: '', experience: '' });
    const [result, setResult] = useState(null);

    const handleEvaluate = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/evaluate', { ast: ruleId, data });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error evaluating rule:', error);
            alert('Failed to evaluate rule');
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Evaluate Rule</h2>
            <form onSubmit={handleEvaluate}>
                <input
                    type="text"
                    name="ruleId"
                    value={ruleId}
                    onChange={(e) => setRuleId(e.target.value)}
                    placeholder="Enter Rule ID"
                    required
                />
                <input
                    type="number"
                    name="age"
                    value={data.age}
                    onChange={handleChange}
                    placeholder="Age"
                />
                <input
                    type="text"
                    name="department"
                    value={data.department}
                    onChange={handleChange}
                    placeholder="Department"
                />
                <input
                    type="number"
                    name="salary"
                    value={data.salary}
                    onChange={handleChange}
                    placeholder="Salary"
                />
                <input
                    type="number"
                    name="experience"
                    value={data.experience}
                    onChange={handleChange}
                    placeholder="Experience"
                />
                <button type="submit">Evaluate Rule</button>
            </form>
            {result !== null && (
                <div>
                    <h3>Evaluation Result:</h3>
                    <p>{result ? 'Eligible' : 'Not Eligible'}</p>
                </div>
            )}
        </div>
    );
}

export default RuleEvaluator;
