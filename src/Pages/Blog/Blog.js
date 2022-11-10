import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Blog = () => {
    return (
        <div className='container mt-5'>
            <h2 className='mb-5 text-bold fs-1 fst-italic text-center'><span className='text-warning'>Hey</span>,this is <span className='text-success'>Fitbazz</span>,see my thought,stories,ideas,blogs!!!</h2>
            <CardGroup >
      <Card className='m-2'>
        <Card.Img variant="top" src="https://shishirkumarblog.files.wordpress.com/2019/05/sql-vs-nosql.png?w=630" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>Difference between sql and nosql</Card.Title>
          <Card.Text>
          SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
          </Card.Text>
          <div className='d-flex'>
<h4>Top Comments</h4>
<button type="button" class="btn btn-secondary ms-5">Subscribe</button>



          </div>
         
        </Card.Body>
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
      </Card>

      <Card className='m-2'>
        <Card.Img variant="top" src="https://www.akana.com/sites/default/files/image/2020-12/image-blog-what-is-jwt_0.png" className='w-100 h-75'/>
        <Card.Body>
          <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
          <Card.Text>
          JWT,JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. <br/>
          Jwt differs from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.


          </Card.Text>
          <div className='d-flex'>
<h4>Top Comments</h4>
<button type="button" class="btn btn-secondary ms-5">Subscribe</button>



          </div>
        </Card.Body>
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
      </Card>


      
      <Card className='m-2'>
        <Card.Img variant="top" src="https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>Node js vs Javascript</Card.Title>
          <Card.Text>
          <h4>1. NodeJS</h4> :<br/> 
NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br/>

<h4>2.Javascript</h4> : <br/>
Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
          </Card.Text>
          <div className='d-flex'>
<h4>Top Comments</h4>
<button type="button" class="btn btn-secondary ms-5">Subscribe</button>



          </div>
        </Card.Body>
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
      </Card>
    </CardGroup>





    
    <Card className='m-2 mb-5'>
        <Card.Img variant="top" src="https://static.wixstatic.com/media/1af9b8_29fb337cd2b3490996cb3be50a8892a9~mv2.jpg/v1/fit/w_730%2Ch_524%2Cal_c%2Cq_80/file.jpg" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>How does NodeJS handle multiple requests at the same time?</Card.Title>
          <Card.Text>
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

          </Card.Text>
          <div className='d-flex'>
<h4>Top Comments</h4>
<button type="button" class="btn btn-secondary ms-5">Subscribe</button>



          </div>
        </Card.Body>
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
      </Card>
        </div>
    );
};

export default Blog;