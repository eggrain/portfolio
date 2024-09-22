export default function Screenie({src, alt}) {
    return <div>
        <figure>
            <img className="demo-screenshot" src={src} alt={alt} />
            <figcaption>{alt}</figcaption>
        </figure>
        
    </div>;
}