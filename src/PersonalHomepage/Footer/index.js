import Info from "../common/Info";
import SocialIcons from "./SocialIcons";
import { LargeLink, Paragraph } from "./styled";


const Footer = () => {
    return (
        <address>
            <Info as="h2">Let's talk!</Info>
            <LargeLink href="mailto:marcin.kawczynski@theritual.eu">marcin.kawczynski@theritual.eu</LargeLink>
            <Paragraph>
            I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
            </Paragraph>
            <SocialIcons />
        </address>
    );
}



export default Footer;