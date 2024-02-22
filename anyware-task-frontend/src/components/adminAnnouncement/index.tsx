import React from 'react';
import { useState ,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
export default function Admin() {
 const [announcement, setAnnouncement] = useState<any>([]);

 const navigate = useNavigate();
 useEffect(() => {
  fetch('http://localhost:3000/announcement',{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
}).then(res => res.json()).then(data => {
    setAnnouncement(data);
    console.log(announcement);
}
)
}
,[])


    const addannouncement = (e:any) => {
        e.preventDefault();
    fetch('http://localhost:3000/announcement/add',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            user:e.target.user.value,
            course:e.target.course.value,
            summary:e.target.summary.value
        })
    }).then(res => res.json()).then((data: any) => {
      alert('announcement added');
      setAnnouncement([...announcement, data]);
      console.log(data);
      document.getElementById('addannouncementform')?.reset();
      
    }
    )
    }

    const deleteannouncement = (id:any) => {
      fetch('http://localhost:3000/announcement/delete/'+id,{
          method:'DELETE',
          headers:{
              'Content-Type':'application/json'
          }
      }).then(res => res.json()).then((data: any) => {
        alert('announcement deleted');
        setAnnouncement(announcement.filter((item:any) => item._id !== id));
        console.log(data);
        
      }
      )
      }




    return(
    <div className="container">
        <h2>add announcement</h2>
        <form onSubmit={addannouncement} id='addannouncementform'>
  <div className="form-group">
    <label htmlFor="user">user</label>
    <input type="text" className="form-control" id="user"  placeholder="Enter username" />
  </div>
  <div className="form-group">
    <label htmlFor="course">course</label>
    <input type="text" className="form-control" id="course" placeholder="course" />
  </div>
  <div className="form-group">
    <label htmlFor="summary">summary</label>
    <textarea class="form-control" id="summary" rows="3"></textarea>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
  {announcement.map((item:any) => {
      return(
        <tr>
        <th scope="row">{item._id}</th>
        <td>{item.user}</td>
        <td>{item.course}</td>
        <td>{item.summary}</td>
        <td><button type="button" className="btn btn-primary" onClick={()=>navigate(`/editannouncement/${item._id}`)}>edit</button></td>
        <td><button type="button" className="btn btn-danger" onClick={()=>deleteannouncement(item._id)}>delete</button></td>
      </tr>
      )
  }
  )}


  </tbody>
</table>


</div>
    )

}