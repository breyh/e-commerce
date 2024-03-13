import Container from "./components/container/Container";
import HomeBanner from "./components/container/HomeBanner";

export default function Home() {
    return (
        <div className="p-8">
            <Container>
                <div>
                    <HomeBanner />
                </div>
            </Container>
        </div>
    )
}
