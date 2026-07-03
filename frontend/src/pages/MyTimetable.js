import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Calendar3,
  Clock,
  Person,
  CameraVideo,
} from "react-bootstrap-icons";

function MyTimetable() {

  const [timetable, setTimetable] = useState([]);

  useEffect(() => {

    loadTimetable();

  }, []);

  const loadTimetable = async () => {

    try {

      const email = localStorage.getItem("email");

      const res = await axios.get(
        `http://localhost:5000/api/my-timetable/${email}`
      );

      setTimetable(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

<div
className="container-fluid py-4"
style={{
background:"#eef2f7",
minHeight:"100vh"
}}
>

<div className="container">

<h2 className="fw-bold mb-4">

My Timetable

</h2>

{timetable.length===0 ? (

<div className="alert alert-info">

No classes available.

</div>

) : (

<div className="row">

{timetable.map((item,index)=>(

<div
className="col-lg-6 mb-4"
key={index}
>

<div className="card shadow border-0 rounded-4 h-100">

<div className="card-body">

<h4 className="fw-bold text-primary">

{item.subject}

</h4>

<hr/>

<p>

<Person className="me-2"/>

<strong>Teacher :</strong>

{item.teacher}

</p>

<p>

<Calendar3 className="me-2"/>

<strong>Day :</strong>

{item.day}

</p>

<p>

<Clock className="me-2"/>

<strong>Time :</strong>

{item.time}

</p>

<button
className="btn btn-primary rounded-pill mt-3"
>

<CameraVideo className="me-2"/>

Join Class

</button>

</div>

</div>

</div>

))}

</div>

)}

</div>

</div>

  );

}

export default MyTimetable;