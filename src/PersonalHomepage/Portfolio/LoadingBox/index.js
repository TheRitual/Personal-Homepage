import { Loading } from "./gfx";
import { LoadingContainer, LoadingInformation, LoadingWrapper } from "./styled";

const LoadingBox = () => {
    return (
        <LoadingContainer>
            <LoadingInformation>
                Please wait, projects are being loaded...
            </LoadingInformation>
            <LoadingWrapper>
                <Loading />
            </LoadingWrapper>
        </LoadingContainer>
    );
}

export default LoadingBox;