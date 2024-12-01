export default function Screenie({src, alt}) {
    return <div>
        <figure className="d-flex flex-column justify-content-center">
            <figcaption className="text-center" >{alt}</figcaption>
            <img className="demo-screenshot" src={src} alt={alt} />
        </figure>
        
    </div>;
}