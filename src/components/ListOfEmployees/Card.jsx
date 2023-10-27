import Avatar from './Avatar';

const Card = ({ empleado }) => {
    return (
        <section className='d-flex flex-wrap border border-info m-3'>
            <article className='col-2'>
                <div className='m-3'>
                    <Avatar avatar={empleado.pic}></Avatar>
                </div>
            </article>
            <article className='col-10 text-center'>
                    <h2 className='m-2'>{empleado.fullName}</h2>
                <div className='d-flex justify-content-around'>
                    <p className='m-1 w-50'>{empleado.title}</p>
                    <p className='bg-info text-light rounded m-1 w-50'><strong>{empleado.department}</strong></p>
                </div>
            </article>
        </section>
    );
};

export default Card;