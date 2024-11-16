import { Link } from "react-router-dom";

 

const ErrorPage = () => {
    return (
        <div className="min-h-screen border flex justify-center items-center">
            <div className="border rounded-md p-4">
                <h1 className="font-semibold text-4xl mb-4">Error Page!</h1>
                <Link to='/category/01' className="btn bg-green-400 outline-none border-none">Back To Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;