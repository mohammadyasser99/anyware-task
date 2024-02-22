import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

export default function AdminQuiz() {
   const navigate= useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [quiz, setQuiz] = useState<any>([]);
   
    useEffect(() => {
        fetch('http://localhost:3000/quiz',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            setQuiz(data);
        }
        )
    }
    ,[])

    const handleDateChange = (date : any) => {
        setSelectedDate(date);
        console.log(date);
        
      };


    const addQuiz = (e:any) => {
        e.preventDefault();
        const dataToSend = {
            dateTime: selectedDate.toISOString(), // Convert the date to ISO string format
      
          };
        fetch('http://localhost:3000/quiz/add',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                topic:e.target.topic.value,
                course:e.target.course.value,
                time:dataToSend.dateTime
            })
        }).then(res => res.json()).then((data: any) => {
            alert('quiz added');
            console.log(data);
            document.getElementById('addquizform')?.reset();
            setQuiz([...quiz, data]);
            
            }
        )
    }

    const deletequiz = (id:any) => {
        fetch('http://localhost:3000/quiz/delete/'+id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => res.json()).then((data: any) => {
            alert('quiz deleted');
            setQuiz(quiz.filter((item:any) => item._id !== id));
            console.log(data);
            
            }
        )
        }

    return(
        <div className="container">
            <h2>add quiz</h2>
            <form onSubmit={addQuiz} id='addquizform'>
      <div className="form-group">
        <label htmlFor="topic">topic</label>
        <input type="text" className="form-control" id="topic"  placeholder="topic" />
      </div>
      <div className="form-group">
        <label htmlFor="course">course</label>
        <input type="text" className="form-control" id="course" placeholder="course" />
      </div>
      <div className="form-group">
        <label htmlFor="time">time</label>
        <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />
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
      {quiz.map((item:any) => {
          return(
            <tr>
            <th scope="row">{item._id}</th>
            <td>{item.topic}</td>
            <td>{item.course}</td>
            <td>{item.time}</td>
            <td><button type="button" className="btn btn-primary" onClick={()=>navigate(`/editquiz/${item._id}`)}>edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={()=>deletequiz(item._id)}>delete</button></td>
          </tr>
          )
      }
      )}
    
    
      </tbody>
    </table>
    
    
    </div>
        )
    

}