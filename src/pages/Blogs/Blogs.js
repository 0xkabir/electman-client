import React from 'react';
import useTitle from '../../hooks/useTitle'

const Blogs = () => {
    useTitle('Blogs')
    const questions = [
        {
            question: "What are the differences between SQL and NoSQL?",
            answer: "SQL databases are called as Relational Databases (RDBMS); whereas NoSQL database are called as non-relational database. SQL databases have fixed or static or predefined schema, whereas NoSQL databases have dynamic schema. SQL databases are vertically sacalable and requires things like CPU, RAM to increase the load. NoSQL databases are horizontally scalable and can handle more traffic by shrading or adding more servers. SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). "
        }, 
        {
            question: "What is JWT, and how does it work?",
            answer: "JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64, header, payload and signature. Headers contain the type of the token and the signing algorithm. The payload contain the claim. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. "
        },
        {
            question: "What is the difference between javascript and NodeJS?",
            answer: "Javascript is a programming language and NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers but we can run Javascript outside the browser with the help of NodeJS. Javascript is capable enough to add HTML tags bu NodeJS doesn't have this ability.JavaScript can run in any browser engine whereas V8 is the Javascript engine inside of node.js. Javascript is used in frontend development and NodeJS is used for server-side development."
        },
        {
            question: "How does NodeJS handle multiple requests at the same time?",
            answer: "NodeJS is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. NodeJS accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. NodeJS is a event loop single threaded language that can handle concurrent requests with a single thread without blocking it for one request. NodeJS basically works on the concepts of Asynchronous and Non-Blocking I/O. The single thread on node.js doesn’t work with a request instead it sends the request to another system which resolves the request and it is accessible for another request. And the Non-Blocking I/O ensures working with multiple requests instead of blocking the single thread for a single request."
        }
    ]
    return (
        <div>
             <h2 className='text-3xl mt-8 font-medium text-center'>Common Web Development Interview Questions</h2>
             {
                questions.map((question, index) => {
                    return <div key={index} className='w-11/12 md:w-4/5 mx-auto my-4 px-5 py-3 rounded-md shadow-md'>
                        <h3 className='text-lg text-slate-800 font-medium'>Q{index+1}. {question.question}</h3>
                        <p className='my-2 text-slate-900'>
                            {question.answer}
                        </p>
                    </div>
                })
             }
        </div>
    );
};
export default Blogs;