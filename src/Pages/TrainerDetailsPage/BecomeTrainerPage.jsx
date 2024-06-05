import  { useState } from 'react';
import Select from 'react-select';
import useAuth from '../../Hooks/useAuth';

const BeTrainerForm = () => {
    const {user} = useAuth()
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState(''); // Assume email is retrieved from authentication
    const [age, setAge] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [skills, setSkills] = useState([]);
    const [availableDays, setAvailableDays] = useState([]);
    const [availableTime, setAvailableTime] = useState('');
    const [otherInfo, setOtherInfo] = useState('');
    const [status, setStatus] = useState('pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Code to submit form data to the database
        console.log({
            fullName,
            email,
            age,
            profileImage,
            skills,
            availableDays,
            availableTime,
            otherInfo,
            status
        });
    };

    // Options for available days
    const options = [
        { value: 'Sun', label: 'Sunday' },
        { value: 'Mon', label: 'Monday' },
        { value: 'Tue', label: 'Tuesday' },
        { value: 'Wed', label: 'Wednesday' },
        { value: 'Thu', label: 'Thursday' },
        { value: 'Fri', label: 'Friday' },
        { value: 'Sat', label: 'Saturday' }
    ];

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Be a Trainer</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Full Name</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Email</label>
                    <input type="email" value={email} readOnly className="w-full border-gray-300 rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed" />
                </div>
                <div>
                    <label className="block mb-1">Age</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Profile Image</label>
                    <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} className="w-full border-gray-300 rounded-md px-4 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Skills</label>
                    <Select
                        options={[
                            { value: 'JavaScript', label: 'JavaScript' },
                            { value: 'React', label: 'React' },
                            { value: 'Node.js', label: 'Node.js' },
                            { value: 'HTML', label: 'HTML' },
                            { value: 'CSS', label: 'CSS' }
                        ]}
                        isMulti
                        onChange={setSkills}
                    />
                </div>
                <div>
                    <label className="block mb-1">Available Days a Week</label>
                    <Select
                        options={options}
                        isMulti
                        onChange={setAvailableDays}
                    />
                </div>
                <div>
                    <label className="block mb-1">Available Time in a Day</label>
                    <input type="text" value={availableTime} onChange={(e) => setAvailableTime(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Other Info</label>
                    <textarea value={otherInfo} onChange={(e) => setOtherInfo(e.target.value)} className="w-full border-gray-300 rounded-md px-4 py-2"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Apply</button>
            </form>
        </div>
    );
};

export default BeTrainerForm;
