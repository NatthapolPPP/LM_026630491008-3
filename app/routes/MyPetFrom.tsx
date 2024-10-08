import { useState } from "react";

export default function Frompet() {
    const [name, setName] = useState('');
    const [Photo, setPhoto] = useState('');
    const [birthday, setBd] = useState('');
    const [Category, setCategory] = useState('');
    const [sex, setSex] = useState('');
    const [desc, setDesc] = useState('');
    const [Humen, setHumen] = useState('');
    const [Email, setEmail] = useState('');
    const [mypet, setMypet] = useState([]);
    let nextId = 0 ;

    function handleClickAdd(n:string,ph:string,b:string,c:string,s:string,d:string,h:string,em:string){
        console.log("Pet List:" ,mypet);
        setMypet([
            ...mypet,
            {
                id: nextId++,
                name: n,
                Photo: ph,
                birthday: b,
                Category: c,
                sex: s,
                desc: d,
                Humen: h,
                Email: em
            }
        ]);
    }
    
    function handleClickReset(){
        setName("")
        setPhoto("")
        setBd("")
        setCategory("")
        setSex("")
        setDesc("")
        setHumen("")
        setEmail("")
    }
    //CSS
    const div_maring = {
        margin:"30px 0px 0px 0px"
        };

    return(
        <div>
            <h1 className="font-bold text-xl mb-2">แบบฟอร์มสัตว์เลี้ยง</h1>
            <label>ชื่อ:</label>
            <input 
                name="cName"
                className="border-1"
                onChange={(e) => setName(e.target.value)}
            />
            <hr />
            <label>รูปภาพ:</label>
            <input 
                name="cName"
                className="border-1"
                onChange={(e) => setPhoto(e.target.value)}
            /><hr />
            <label>วันเกิด: </label>
            <input 
                type="date"
                name="cPos"
                className="border-1"
                onChange={(e) => setBd(e.target.value)}
            /><hr />
            <label>ประเถท: </label>
            <select onChange={(e) => setCategory(e.target.value)}>
            <option value="ไม่ระบุ">ไม่ระบุ</option>
            <option value="แมว">แมว</option>
            <option value="หมา">หมา</option>
            <option value="หนู">หนู</option>
            </select><hr />
            <label>เพศ: </label>
            <input 
                type="radio"
                name="cWorkplace"
                value={"ชาย"}
                className="border-1"
                onChange={(e) => setSex(e.target.value)}
            /> ชาย 
            <input 
                type="radio"
                name="cWorkplace"
                value={"หญิง"}
                className="border-1"
                onChange={(e) => setSex(e.target.value)}
            /> หญิง
            <input 
                type="radio"
                name="cWorkplace"
                value={"อื่นๆ"}
                className="border-1"
                onChange={(e) => setSex(e.target.value)}
            /> อื่นๆ 
            <hr />
            <label>ข้อมูลเพิ่มเติม:</label>
            <textarea 
                name="cDesc"
                rows={4}
                cols={50}
                className="border-2"
                onChange={(e) => setDesc(e.target.value)}
            />
            <hr /><hr /><hr />
            <div style={div_maring}>
            <label>ชื่่อเจ้าของ:</label>
            <input 
                name="cName"
                className="border-1"
                onChange={(e) => setHumen(e.target.value)}
            /><hr />
            <label>Email:</label>
            <input 
                type="email"
                name="cName"
                className="border-1"
                onChange={(e) => setEmail(e.target.value)}
            /><hr />
            <hr />
            <button 
            onClick={() => handleClickAdd(name,Photo,birthday,Category,sex,desc,Humen,Email)}
            className = "border bg-green-300 h-18 w-20">
                Summit
            </button>
            <button 
            onClick={() => handleClickReset()}
            className = "border bg-white h-18 w-20">
                reset
            </button>
            </div>
            <hr />
            <div style={div_maring}>
            <h1 className="font-bold text-xl mb-2"> ชื่อ:{name} </h1>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <p className="font-bold text-xl mb-2">รูปภาพ</p>   <img className="w-100 h-300" src={Photo} />
            <p className="font-bold text-xl mb-2"> วันเกิด:{birthday} </p>
            <p className="font-bold text-xl mb-2"> ประเถท:{Category} </p>
            <p className="font-bold text-xl mb-2"> เพศ:{sex} </p>
            <p className="font-bold text-xl mb-2"> ข้อมูลเพิ่มเติม:{desc} </p>
            <hr />
            <p className="font-bold text-xl mb-2"> ชื่อเจ้าของ:{Humen} </p>
            <p className="font-bold text-xl mb-2"> อีเมล:{Email} </p>
            </div>
        </div>
        </div>
    )
}