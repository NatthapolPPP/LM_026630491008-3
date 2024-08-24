function Prodata(){
    const name = "ณัฐพล เมืองโคตร";
    const ID = "026630491008-3";
    const Email = "Natthapol.mua@rmutto.ac.th";
    const Tel = "0636144865";

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p>
      รหัสนักศึกษา: {ID}
    </p>
    <p>
      อีเมล: {Email}
    </p>
    <p>
      เบรอ์โทรศัพท์: {Tel}
    </p>
  </div>
</div>
    );
}

export default function Data () {
    return (
        <> 
        <h1 className="font-sans p-4">ข้อมูล</h1>
        <hr />
        <Prodata />
        </>
    );

}