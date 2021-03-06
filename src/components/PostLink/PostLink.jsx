import { Link } from "react-router-dom";
import "./PostLink.css";
import bgPlaceholder from "../../media/img/background/placeholderBg.jpg";

function PostLink(props) {
    const bgSheet = {
        backgroundImage: `url('${props.miniature ?? bgPlaceholder}')`,
        backgroundSize: "cover"
    }
    
    return(
        <Link to={"post/" + props.source ?? "/"}>
            <article>
                <div>
                    <h2>{props.title ?? "Post"}</h2>
                    <small>{props.tags.toString().replaceAll(",", ", ")}</small>
                    <p>
                        {props.description ?? `Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Proin fringilla lobortis lorem ut ullamcorper. Pellentesque ultrices, 
                        massa mattis ultrices tristique, ante orci elementum nisi, non euismod ligula 
                        odio non turpis. Vestibulum luctus at quam sed suscipit. Sed ut felis id purus 
                        viverra placerat`}
                    </p>
                    <p>
                        <small>{props.createdAt ?? ""}</small>
                    </p>
                </div>
                <div style={bgSheet} />
            </article>
        </Link>
    )
}

export default PostLink;