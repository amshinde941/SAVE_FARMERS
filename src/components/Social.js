import React from "react"
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter} from 'react-icons/ti';
const Socials = ({ isMobile }) => {
  const pascSocials = [
    {
      icon: TiSocialFacebook,
      text: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      icon: TiSocialInstagram,
      text: "instagram",
      link: "https://www.instagram.com",
    },
    {
      icon: TiSocialTwitter,
      text: "twitter",
      link: "https://www.twitter.com",
    },
    {
      icon: TiSocialLinkedin,
      text: "linkdin",
      link: "https://www.linkdin.com",
    },
  ]

  return (
    <div className="ml-20">
      <p style={{padding:"5px"}} className="font-bold text-2xl">
        Our Socials
      </p>
      <div className={`grid grid-cols-2 gap-y-4 `}>
        {pascSocials.map(social => (
          <a 
            href={social.link}
            target="_blank"
            key={social.text}
            rel="noreferrer"
            className={`flex items-center mt-5`}
          >
            <span className={`rounded text-2xl hover:bg-blue-700 mr-2`} style={{fontSize:"2em"}}><social.icon/></span>
            <p
              className="text-xl"
            >
              {social.text}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Socials
