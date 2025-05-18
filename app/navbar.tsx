import '../app/navbar.css'
import { useState,useRef, use } from "react";

export default function Navbar() {
    const [called, setCalled] = useState(false);
    const thing = useRef<HTMLDivElement | null>(null);

    const facilities: {
        [key: string]: {
            available: boolean;
            description: string;
            machineType: string;
            specialistAvailable: boolean;
        };
    } = {
        abdominalUltrasound: {
            available: true,
            description: "Used to evaluate abdominal organs like liver, kidneys, and pancreas.",
            machineType: "3D Ultrasound",
            specialistAvailable: true,
        },
        obstetricUltrasound: {
            available: true,
            description: "Used for pregnancy monitoring and fetal health evaluation.",
            machineType: "4D Ultrasound",
            specialistAvailable: true,
        },
        pelvicUltrasound: {
            available: false,
            description: "Used to examine the bladder, uterus, and ovaries.",
            machineType: "2D Ultrasound",
            specialistAvailable: false,
        },
        vascularUltrasound: {
            available: true,
            description: "Used to evaluate blood flow in arteries and veins.",
            machineType: "Doppler Ultrasound",
            specialistAvailable: true,
        },
        thyroidUltrasound: {
            available: true,
            description: "Used to examine the thyroid gland for nodules and other conditions.",
            machineType: "2D Ultrasound",
            specialistAvailable: true,
        }
    };

    function retrieve() {
        Object.keys(facilities).forEach((key) => {
            console.log(key);
        });
    }

    function share() {
        setCalled(true);
        if(thing.current) {
            thing.current.style.opacity = "0.2";
        }
    }
    function cross(){
        setCalled(false);
        if(thing.current) {
            thing.current.style.opacity = "1";
        }
    }

    return (
        <div >
            <nav>
                <div className="navbar-container">
                    <p>MediCare</p>
                    <ul className="navbar-list">
                        <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
                        <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div className="facilities-card" ref={thing}>
                <ul>
                    {Object.keys(facilities).map((key) => (
                        <li
                            key={key}
                            className="facility-item"
                            data-description={key}
                            onClick={share}
                        >
                            <h3>{key}</h3>
                            <p>{facilities[key].description}</p>
                            <p>Machine Type: {facilities[key].machineType}</p>
                            <p>Specialist Available: {facilities[key].specialistAvailable ? "Yes" : "No"}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {called && (
                <div className='open'>
                    <button className="cross" onClick={cross}>Cross</button>
                    <form action="post " className='form'>
                        <input type="email" placeholder='Enter your Email' />
                        <button className="sent">Sent Mail</button>
                        <input type="file" name="file" id="file" className='file'/>
                    </form>
                </div>
            )}
        </div>
    );
}
