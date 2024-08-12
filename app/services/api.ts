import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface APIInfoProps {
    status: string
}

const APIInfo = ({ status }: APIInfoProps) => {

    const { data: getAllCharacters, isLoading } = useQuery({
        queryKey: ["All"],
        queryFn: async () => {
            const res = await axios.get(`https://rickandmortyapi.com/api/character?status=${status}`);
            return res.data.results;
        }
    })


    return { getAllCharacters, isLoading }
}

export default APIInfo;