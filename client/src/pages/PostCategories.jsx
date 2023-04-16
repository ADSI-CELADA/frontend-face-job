import { PostRandom } from "../components/Catalogue/PostRandom";
import { Navbar } from "../components/Header/Navbar"

export const PostCategories = () =>{
    return (
        <>
            <Navbar/>
            <section className="posts-randoms">
                <div className="posts-random-container">
                    <PostRandom/>
                </div>
            </section>
        </>
    )

}