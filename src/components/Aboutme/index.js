import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormP, VideoBg, HeroBg} from "./AboutmeElement"
import Video from "../../videos/video.mp4"

const Aboutme = () => {
  return (
    <>
        <Container>      
        <HeroBg>
        <Icon to="/">Home</Icon>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        </HeroBg>
        
            <FormWrap>
                
                <FormContent>
                    <Form>
                        <FormH1>About Me</FormH1>
                        <FormP>I'm a graduate from UTS with IT master degree. I'm skill in JavaScript, Html, CSS, Git, Mysql and React.</FormP>
                        <FormP>During my master study period, I chose different IT field courses to 
                               figure out which field I’m really interested in and suitable for me.
                               Because interest is always the strong motivation for my career 
                               development. I found that web development is the one I’m really 
                               interested in and I enjoy the process of delivering projects.
                        </FormP>
                        <FormP>I like to develop experitise in different areas over the course of my life and career. I'm open for new opportunties.</FormP>
                        <FormP>I perpfer to keep learning, continue challenging myself, and do interesting things that matter.</FormP>
                        <FormP>I am fluent in JavaScript, HTML, MySql, Git and ReactJS framework. As 
                                mentioned above, I have learned various IT filed courses like Cloud 
                                Computing, IOS development, C# development etc, which means I have 
                                basic knowledge in most IT development fields and have strong quick 
                                learning skills. With a strong passion for web development and related 
                                academic background, I believe I can integrate with the team rapidly and 
                                understand necessary knowledge in a short time. I would welcome the 
                                opportunity to discuss your needs. 
                        </FormP>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Aboutme