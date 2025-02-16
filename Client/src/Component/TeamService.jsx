import React from 'react';
import { NavLink } from 'react-router-dom';
//import { CreateService, GetTeamService, UpdateTeamService, DeleteTeamService } from '../APIRequest/apiRequest';

const TeamService = () => {
    const [team, setTeam] = useState([]);
    const [teamData, setTeamData] = useState({ name: "", skills: "", experience: "", img: "" });
    const [editingTeam, setEditingTeam] = useState(null);
    const [newImage, setNewImage] = useState(null); 

    useEffect(() => {
        (async () => {
            let result = await GetTeamService();
            setTeam(result);
        })();
    }, []);



    // Create Team
    return (
        <div>
            
        </div>
    );
};

export default TeamService;