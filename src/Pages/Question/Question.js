import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Question = () => {
    return (
        <div>
          <h2  className='text-center mb-5'>Frequently Asked Question!!</h2>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How i train?</Accordion.Header>
        <Accordion.Body>
        Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular workouts (for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How i provide services?</Accordion.Header>
        <Accordion.Body>
          Here i provide my service throught online and offline.I have training center in chawkbazar,chittagong.Which is well furnshied and almost every equipment by which i train students.In online i take session on mental fitness and basic physical fitness.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>My qualification.</Accordion.Header>
        <Accordion.Body>
        I have  recognised qualification like: Level 2 Certificate in Fitness Instructing. Level 2 Diploma in Instructing Exercise and Fitness. Level 3 Diploma in Fitness Instructing and Personal Training.
        </Accordion.Body>
      </Accordion.Item>

     
    </Accordion>
        </div>
    );
};

export default Question;