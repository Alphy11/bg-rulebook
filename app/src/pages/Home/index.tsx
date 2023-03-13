import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div className="flex flex-col space-y-4 p-4">
            <h1>Games: </h1>
            <Link
                className="text-blue-600 underline"
                to="rules/twilight-imperium-4"
            >
                Twilight Imperium 4
            </Link>
            <Link className="text-blue-600 underline" to="rules/ark-nova">
                Ark Nova
            </Link>
        </div>
    );
}
