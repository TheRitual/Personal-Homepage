import { ColoredTitle, Description, LinkList, LinkListItem, LinkListLink, StyledBorderedTile, StyledTile } from "./styled";
import { Title, TitleWrapper } from "../Title";

export const Tile = ({ title, children }) => {
    return (
        <StyledTile>
            {title && <TitleWrapper><Title>{title}</Title></TitleWrapper>}
            {children}
        </StyledTile>
    );
}

export const BorderedTile = ({ title, children, links }) => {
    return (
        <StyledBorderedTile>
            {title && <ColoredTitle>{title}</ColoredTitle>}
            <Description>
                {children}
            </Description>
            {
                links &&
                <LinkList>{
                    links.map(link => {
                        return (
                            <LinkListItem>
                                {link.description}:<LinkListLink href={link.link}>{link.link}</LinkListLink>
                            </LinkListItem>
                        )
                    })
                }</LinkList>
            }
        </StyledBorderedTile>
    );
}

