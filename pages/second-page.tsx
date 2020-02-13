import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';

import Nav from '../components/nav';
import { MaxWidth } from '../components/max-width';

const P = styled.p`
  line-height: 2;
`;

interface Props {}

class SecondPage extends React.PureComponent<Props> {
    static async getInitialProps({ query }) {
        return { query };
    }

    render() {
        const {} = this.props;

        return (
            <>
                <Head>
                    <title>Second page</title>
                </Head>

                <MaxWidth px={50} py={50}>
                    <Nav />

                    <Flex>
                        <Box>
                            <h1>Second Page</h1>
                        </Box>
                    </Flex>

                    <Box>
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ac sem interdum, rutrum justo eget,
                            tincidunt purus. Ut et accumsan sem. Sed rutrum
                            purus ut malesuada malesuada. Nunc sodales turpis et
                            est scelerisque euismod. Maecenas id dignissim
                            ligula, a imperdiet purus. In augue eros,
                            sollicitudin ut ligula vel, bibendum varius lacus.
                            Nulla malesuada enim nibh, quis maximus quam
                            suscipit sed. Donec in sodales justo, id ultricies
                            augue. Etiam pretium erat urna. Cras nec rutrum
                            diam. Proin a purus ante. Fusce id eros tincidunt
                            ipsum rhoncus tincidunt sed at eros.
                        </P>
                    </Box>
                </MaxWidth>
            </>
        );
    }
}

export default SecondPage;
