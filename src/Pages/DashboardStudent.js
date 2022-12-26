import React, { Fragment } from "react";
import { Content } from "../Components/Content";

function Test(){
    return(
        <Fragment>
            <Content> 
                <table>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                </table>
            </Content>
        </Fragment>
    );
}
export default Test;