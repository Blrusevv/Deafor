function ungroupStudents(teacherStudentList) {

    let teachers = [];
    Array.from(teacherStudentList).forEach(teacher => {
        teachers.push(teacher);
    });

    let students = [];
    teachers.forEach(teacher => {
        teacher.data.forEach(student => {
            const entries = Object.entries(student);

            let newStudentObj = {
                teacher: teacher.teacher, 
            };
            
            entries.forEach(data => {
                const prop = data[0];
                const propValue = data[1]
                if(Array.isArray(propValue)) {
                    newStudentObj[prop] = `${JSON.stringify(propValue)}`;
                } else {
                    newStudentObj[prop] = propValue;
                }
                
            })

            students.push(newStudentObj);
        });
    });

    console.log(students[1]);
}

ungroupStudents([{ 
    teacher: "Ms. Car", 
    data: [{ 
       name: "James", 
       emergenceNumber: "617-771-1082", 
    }, { 
       name: "Alice", 
       alergies: ["nuts", "carrots"], 
    }], 
  }, { 
    teacher: "Mr. Lamb", 
    data: [{ 
      name: "Aaron", 
      age: 3 
    }] 
  }])