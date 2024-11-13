import swimming from '../assets/swimming.png';
import classImg from '../assets/class.png';
import playgImg from '../assets/playground.png';

const Qzone = () => {
    return (
        <div className="bg-gray-100 p-2">
            <h2 className="font-semibold py-2">Q Zone</h2>
            <div>
                <div>
                    <img src={swimming} alt="" />
                </div>
                <div>
                    <img src={classImg} alt="" />
                </div>
                <div>
                    <img src={playgImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Qzone;