import { FaUserAlt, FaStar } from "react-icons/fa"
import { BiGitRepoForked, BiError } from "react-icons/bi"

function Card(props) {
    return (
        <div className={
            props.darkMode ?
                'w-1/4 m-2  bg-gray-500 p-6 rounded-md flex flex-col items center'
                : 'w-1/4 m-2  bg-gray-200 p-6 rounded-md flex flex-col items-center'
        }>

        <h2 className="text-3xl text-center font-bold">
            #{props.score}
        </h2>
        <div className="mt-3 nb-2 w-40  rounded-full">
            <img 
            src={props.owner.avatar_url}
            alt={props.owner.login}
            className="w-full rounded-full" />
        </div>
        <a href={props.html_url}>
            <h2 className="text-center text-red-800 font-bold text-xl  my-4 capitalize">
                {props.owner.login}
            </h2>
        </a>
        <div className="mt-5">
            <div className="flex items-center">
                <li className="text-green-400 mr-3 list-none">
                <FaUserAlt />
                </li>
                <h3 className="text-xl inline-block">
                    {props.owner.login}
                </h3>
            </div>
                <div className="flex items-center">
                    <li className="text-yellow-400 mr-3 list-none">
                        <FaStar />
                    </li>
                    <h3 className="text-xl inline-block">
                        {props.stargazers_count} Stars
                    </h3>
                </div>
                <div className="flex items-center">
                    <li className="text-blue-600 mr-3 list-none">
                        <BiGitRepoForked />
                    </li>
                    <h3 className="text-xl inline-block">
                        {props.forks} forks
                    </h3>
                </div>
                <div className="flex items-center">
                    <li className="text-red-600 mr-3 list-none">
                        <BiError />
                    </li>
                    <h3 className="text-xl inline-block">
                        {props.open_issues} issues
                    </h3>
                </div>
        </div>

        </div>
    )
}
export default Card;