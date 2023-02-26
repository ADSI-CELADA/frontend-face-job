import React from 'react'

export const Post = () => {
  return (
    <section className="post-contain">
        <div data-aos="fade-up" data-aos-duration="1000" className="post">
            <div className="post-info">
                <div className="post-icon"></div>
                <div>
                <h2>user name</h2>
                <p>user profesion</p>
                </div>
            </div>
            <div className="post-img"></div>
            <div className="post-content">
                <p>post content</p>
            </div>
            <div className="post-stats">
                <div className="post-like">❤</div>
                <div className="post-comment">📝</div>
                <div className="post-share">💬</div>
            </div>
        </div>
    </section>
  )
}
