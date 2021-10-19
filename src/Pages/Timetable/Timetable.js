import React from 'react';

const Timetable = () => {
    return (
        <div>
            <div className="container p-5 my-5 text-center">
                <h1>OUR PROGRAMS</h1>
                <h1 className="green-color">AND TIMETABLE</h1>
            </div>

            <div className="container">
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">TIME</th>
                            <th scope="col">Monday</th>
                            <th scope="col">Tuesday</th>
                            <th scope="col">Wednesday</th>
                            <th scope="col">Thursday</th>
                            <th scope="col">Friday</th>
                            <th scope="col">Saturday</th>
                            <th scope="col">Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <th scope="row">10:00</th>
                            <td><p>CROSSFIT</p><p>10.00-11.00</p></td>
                            <td><p>CARDIO</p><p>10.00-11.00</p></td>
                            <td><p>CROSSFIT</p><p>10.00-11.00</p></td>
                            <td><p>BOXING</p><p>10.00-11.00</p></td>
                            <td><p>OFF</p></td>
                            <td><p>BODY BALANCE</p><p>10.00-11.00</p></td>
                            <td><p>OFF</p></td>

                        </tr>
                        <tr>
                            <th scope="row">12:00</th>
                            <td><p>CROSSFIT</p><p>12.00-01.00</p></td>
                            <td><p>CARDIO</p><p>12.00-01.00</p></td>
                            <td><p>CROSSFIT</p><p>12.00-01.00</p></td>
                            <td><p>BOXING</p><p>10.00-01.00</p></td>
                            <td><p>OFF </p></td>
                            <td><p>BODY BALANCE</p><p>12.00-01.00</p></td>
                            <td><p>OFF</p></td>
                        </tr>
                        <tr>
                            <th scope="row">10:00</th>
                            <td><p>CROSSFIT</p><p>01.00-02.00</p></td>
                            <td><p>CARDIO</p><p>01.00-21.00</p></td>
                            <td><p>CROSSFIT</p><p>01.00-02.00</p></td>
                            <td><p>BOXING</p><p>01.00-02.00</p></td>
                            <td><p>OFF </p></td>
                            <td><p>BODY BALANCE</p><p>01.00-02.00</p></td>
                            <td><p>OFF</p></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Timetable;