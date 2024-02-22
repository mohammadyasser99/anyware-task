 
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function EditQuiz(props:any) {
    const [quiz, setQuiz] = useState<any>({})
    const { id } = useParams();
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date : any) => {
        setSelectedDate(date);
        console.log(date);
        
      };

    useEffect(() => {
        fetch('http://localhost:3000/quiz/'+ id,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => res.json()).then(data => {
            setQuiz(data)
            console.log(data);
        }
        )
    }
    ,[])
    const editQuiz = (e:any) => {
        e.preventDefault();
    fetch('http://localhost:3000/quiz/update/'+id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            topic:e.target.topic.value,
            course:e.target.course.value,
            time:selectedDate
        })
    }).then(res => res.json()).then((data: any) => {
      alert('quiz edited');
      console.log(data);
        navigate('/admin/quiz');
    }
    )
    }

    return(
        <div className='container'>
        <h2>{id}</h2>

        <form onSubmit={editQuiz} id='addquizform'>
      <div className="form-group">
        <label htmlFor="topic">topic</label>
        <input type="text" className="form-control" id="topic"  placeholder={quiz.topic} />
      </div>
      <div className="form-group">
        <label htmlFor="course">course</label>
        <input type="text" className="form-control" id="course" placeholder={quiz.course} />
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

        </div>
        
    )
}