import React from 'react'
import Data from '../lib/data.json'
import { Grid, Button } from '@mui/material'

const Element = () => {
    return (
        <div className="element">
            <Grid container columns={18} className="table">
                {
                    Data.map((i, index) => {
                        if(index > 1) return;
                        else return <Grid xs={1} spacing={19} className="p-5">
                            <Button variant="outlined">
                                <div>
                                    <div>{i.symbol}</div>
                                    <div>{i.atomicNumber}</div>
                                </div>
                            </Button>
                        </Grid>
                    })
                }
            </Grid>
            <Grid container columns={18} className="table">
                {
                    Data.map((i, index) => {
                        if(index === 4 || index === 12) {
                            const data = []
                            for (let i=0; i<10; i++)
                                data.push(
                                    <Grid xs={1} className="hidden p-5">
                                        <Button variant="outlined">&nbsp;</Button>
                                    </Grid>
                                )
                            data.push(
                                <Grid xs={1} className="p-5">
                                    <Button variant="outlined">
                                        <div>
                                            <div>{i.symbol}</div>
                                            <div>{i.atomicNumber}</div>
                                        </div>
                                    </Button>
                                </Grid>
                            )
                            return data
                        }
                        if(index < 2 || (index > 56 && index < 71) || (index > 88 && index < 103)) return;
                        else return <Grid xs={1} className="p-5">
                            <Button variant="outlined">
                                <div>
                                    <div>{i.symbol}</div>
                                    <div>{i.atomicNumber}</div>
                                </div>
                            </Button>
                        </Grid>
                    })
                }
            </Grid>
            <Grid container columns={15} className="table mt-20">
                {
                    Data.map((i, index) => {
                        if((index > 55 && index < 71) || (index > 87 && index < 103))
                            return <Grid xs={1} className="p-5">
                            <Button variant="outlined">
                                <div>
                                    <div>{i.symbol}</div>
                                    <div>{i.atomicNumber}</div>
                                </div>
                            </Button>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}

export default Element