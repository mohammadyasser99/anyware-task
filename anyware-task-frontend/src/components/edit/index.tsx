import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
export default function EditAnnouncement(props:any) {
    const [announcement, setAnnouncement] = useState<any>({})
    const { id } = useParams();
    const navigate = useNavigate();
useEffect(() => {
    fetch('http://localhost:3000/announcement/'+ id,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json()).then(data => {
        setAnnouncement(data)
        console.log(data);
    }
    )
}
,[])
const editannouncement = (e:any) => {
    e.preventDefault();
fetch('http://localhost:3000/announcement/update/'+id,{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        user:e.target.user.value,
        course:e.target.course.value,
        summary:e.target.summary.value
    })
}).then(res => res.json()).then((data: any) => {
  alert('announcement edited');
  console.log(data);
    navigate('/admin/announcement');
}
)
}
return(
    <div className="container">
        <h1>Edit {id}</h1>
        <form onSubmit={editannouncement} id='addannouncementform'>
            
  <div className="form-group">
    <label htmlFor="user">user</label>
    <input type="text" className="form-control" id="user"  placeholder={announcement.user} />
  </div>
  <div className="form-group">
    <label htmlFor="course">course</label>
    <input type="text" className="form-control" id="course" placeholder={announcement.course}  />
  </div>
  <div className="form-group">
    <label htmlFor="summary">summary</label>
    <textarea className="form-control" id="summary" rows="3" placeholder={announcement.summary}></textarea>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>

)

}