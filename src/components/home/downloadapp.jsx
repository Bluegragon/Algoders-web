import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Appstore() {
  return (
    <Box sx={{ flexGrow: 1 ,display:'flex',flexWrap:'wrap',p:4,}}>
      <Grid container spacing={2}  wrap='flex-wrap'>
        <Grid item xs={12} sm={12} md={3} lg={12} direction={'column'}>
          <Item sx={{boxShadow:'none'}}> <a href={"https://play.google.com/store/apps"}>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAB6CAMAAAC4AMUdAAABj1BMVEUAAAD///+oqKhdXV0A8HalpaUA0/8A1f8A1/+BgYEA2f/7+/sA0f8hISEAzf/29va8vLxmZmb/zAAAyv/i4uIA2///xgDIyMgAx/8A3/8Aw/8Axf+NjY3v7+9OTk4Av//Z2dkXFxctLS1GRkb7N0YAj6OVlZX/1QA4ODj/zwD1M0kaGhrk5OSvr68AvP90dHT/wQAA4//vL0wzMzPDw8NhYWHQ0NDpK08AiaMAs//4NUf/2QBBQUF9fX1ubm4A8W4E6nUAsP8J4HUc0XQA8XqnapL/Mjb8hiSUfaDjJ1INJhsLGxQfgVEn5YUs0X0hjlcSMiMU17UK0aMdcUcKWGclum4UUTMDe5QdoF0VYDoNOCMB26Yfp2Ic7IEVVTUbwGyb00qmgxnuwh2GcBmR2UXNqhxQRRWk1Dq8nh7ZuR1iVRUAzbeeix0kIQk9NhHmyBKUcaSOeQAcGAD8jiKsiwDhsgB3XwDlgCCjJCw4AhBGDxPMLTlkFhyHHiadIi29JT0eBQqOf6B9Fit2FCsqBw9OgpvNAAASxUlEQVR4nO2dj3vbxnnHAVCQTcM0QBs2ZZtgQFKDaBEIY4mCaotiHVdK5TZNmrRpu6Xpjyxd0rVb07XbunVNvHZ/+O7uvQPugCN5FEmBpvHNk8ciAAKH+9x773vvHUBNZ/JcJwjMUgUrCBzXS6Bo9F/bMQKj1FooMBxLxOMHphEF1UG9UqpQ1QfVIDLMwOfxOKZhNFs1rdQaqNZqGobppHgi0whaRZeqVKqKaZgRw4Nsp9kpukSleHUCsB+Ex0d0+kWXp5SoPuLjYzx2YASl11k7dZDDsREe1LWVfmcNVcHdm+ahmK3okpSSCcVvnuYGUWk8a6lWFLhaVHqeNVUtMBwtMKpFl6OUXFUjQHgGRRejlFwDhMc06kUXo5RcdcNEeCpFF6OUXJUSzzqrxLPWKvGstUo8a621wTOqn55W0tFxLZXwocYf0te0vnQX0eHR4LQ+Sj62a7U29/cKb2WJUsPzne+uuBhj37N03XajQ/jc8V2m8FBLP5CPoK7rRpo25HfxqaluI0RntML4iG4YhK7fo3+bbjjSXgUp4Pnuu+9973vvvf/91RXi0E/WpeiQnO1Y6ZaepvNiVdzS9Yamhfyu9DbaUbp1CJbS1MkXiBxd767udpYoBTw//uA51nvvtqcdtYBauI69qBkMbfSHiTd10F82CPGAf2FLBo+Pt1l0V2o9Q7LyKGhGeEGSS+aBMR79FHZvEp7tax8SPp/8/AcrKUINVaFH00qR7pE6Rnj8zGG+7gkTuq3UGBAM8VhsOwH8WUVnj3HDIng8aGIbhOeH17e3wX6eP//oRysoAqorP6msJvgEKR67x38W8QiWPUBO5zQ5zgNUCA+ywIhdclPw/BjhuQn28/zZJz9ZugtC1azn/PRiePzEdrDGiItG8AS2bpFb3SA838B4bn7wDNNBev7+d5ZbApM1aV4L4enpesgHzmj3EcFTRf+7eMsm4bmB8dz8+BnV2beW64JcXR/nNi6E5zQDPNB1h+BpYrvCoeHm4bn1wbME0Ht/v8QSeLoHfVu3SnUqRG7MiajjMYW+Dd2jpcfQueEv4dhjw/AgPrdufbzF+Gx98tPl9XCeTkeazXRRPsFDxWZy1fE4bPRENbJ0n+LBMV1jw/BcAzx3PmR8tra2zpYWIyTWk+Cx+hiPHYNYz6eOJ5psPVoNjbEGG4nn1i3gs0V09nxJLihkvmd0OkCqhrpFfU+biB2njqea8T1N5nswNBR0u7VNwwN87uD+bYvp7FtLcUGBWJldZE0Lhga1TOTWIOkeigd/ioyNwsPM586dD7+5xenZR/+weAnwuIdbfY9oGYuOe2Khd6un4x7yPTRMdTcPD/Y+d3Y+FvhsffKTxWME1NO4LA2tVZDraUnxuOp40EA0Dda7adYAmIGP20g8d3Y+EPlsPX930cmGPs651Uk+rRNYkBPFeNp9YRZnDuuBnBsxydrApsclePBIa9PwbDM8WftZggvC3Y3uR6bh4NR1jDfhyM2nopY1Dx7sYPTQiQwHT1WAI0rxHFmbhOfuNc757Ow8zNrP1tnPF82UxskoxzLIBm7cw2YQpnRujRwezUgnjIawL8WjGRuL587Ow4dZ+0Eu6KcLFmNAATl0QWTHs5ksCiW2QxGPbTv0T8fO4dGO4MlMPWYrYKuWzQar7dC2NmW29Bt3r4u928MHOftBgN5f1AUdtpb94HGn1TqcfdRaSxHPNYgNSO+G+HyY57OkUVApQcp4tnk8b0j4IBf0sysr9usiJTzXhdAaeZ8Hsv4N9XAfrXpFz+umy+BB5iO3HzxMvbKSvxZSx8OF1hjPG1L72dpa8mTday5VPHxoja3nwRtvyu2ndEHL1Bx4+NAam8+bE+xn69lKFvS8llLDkwmtH4L5TLKfrbNf/PLKbmCzpYLnRtb5MPOZZD+f33706T9e2S1sshTw3L9xXYjddlhw8Kbcfs4+u3fv9u1Hv/qnK7uJzdUl8LDQGvN5krefs8/vYTy3H518cUlAtcPOK/J8x8o1D55tYWBK8OT7t7PP3gI8tx/tffrbuVfNt4zYd8PQ9ePy9XKaIp4b8tCa4MnYz9nnmA7gefTo5HdzuaCjiHtuRNc9Y/Vp5dPIMIxIsRWRgxOZQZUvX4XsXPI8xWXwJLEB5vNE5PPZWzyeR3t7v/5n1aJ0G7aekadacZcWTDso9qXDXPnidIFrlWxZ8hsiVPGkzodLHBDrefJ2ygfZThbPiaoLMrP3DhWQX+C7VM2Fx5EUMGZ1R/BYV47n71I8ktAa4Xny9m++mdqOgGcP6+Tkt/8ysxyjWHLr5IbN5d2sRAvj0S26jLVAPGnvdjOLh/AB+yG2k7UejOfkd/86oxij9LXafmQGgem4yYaV2s/ieNiK4cLw3L2RD6353u3J22A/QEeGZxafFqPjpq8u65mwcbXuZ3489tABxT4tNTApFk827fYwjQ0QHmQ/Z794azKeky+mloLdZyCgGOElG86k7yxH8+Nx089d6i99XOwi8UyK3QAP5vMbajsT8JxMuUKb+h0/96rmupd/Mmu5ugQevgnVIdjE7mdN8VDz+fLbEjx7SnggJNVjSSW11iqwzuOhZfe1IvHMdD5Pnpy/s/vtadbzx8kX6HM9xJVrUTyw5BQ/ArM2eCS925fv7O4yPvOGBtCBW73JR6xQC+MJSOHHBeORTiqw2ODNc0yH8ZHg+fWUgU/P46LTK9fCeAas9MXjmdS7fQl0KJ8cnr3f/9uU859C11ZQjnphPGOreDx3J+JBfN44Z3SATyaps/fF9DEPhG3B1GNEHQVRFJkDaZ32mkYUGU1pZvKQ7BNfa5vD06uik0dNaVcrw1NloVsWT68ZRU5knC7U7pTx5GK3h8z5fJnSQXzu3RMjt1/NSolCaKpc4JHj0bS2HWeLXauGdJ/lBdn1u5WYZlxtNPTFr+Kx6CP0PJ6xz06QvMmKkwwPSZPalSyescuS7zY9U0BWjIsPvZJN/hSvq4Dn8d0kNpCE1g8EOru7f+Dw7J18+h9TzkzUIrcRzjqMKRKy2rEwUqr7/L5QfDk3n232ayFzdwKevpCSNnIXl+DpkUM9TcTTFjOIDv5KPzkyvRmyadrQThFPrnfbYeZzLtKh9kOn434/5bxUzQlVIdVIAICbJtdVBZl9UCugVih+jTkMAU/LE7+fG4jl8Ry6SQ1zeLri1VBT6SWX4hpNG5ratN9NmgePZFJh5+Kd3acZPn+4DZPZe39UmUmAsFqM20ZOIyOYV2m7elZW0gfl6Oj6kO2refmdOTzt3EENTVQ2qaN1aIGwq+PwZOnAM2V1sUzMbcXTamduPNvcgoOHD87feYqVsR9sO7dnRARMRrZNafjRndz9YfNqU9uxY7MaNGgd2HTO+5Qe6DvNZsSMjE5G1Ggteg2zacbJyUU87OyeU603Y/AcmYCFHOwNxqBBtUFPFCSVTfDALemu0xwEDS8tCfR4yQwr7QGnxnrqePKx287Oxe5Tqoz93P73mU6HCu7lVNgmwYMzo/S9FDEA6UVpw0xmJGz4Ea/2AD7C+6fYTN8Q4rkWs0ERDz27A9VX93j2VHRCwaL/MflkZ4qnQlyYAZ3WCBjiZ8PHfJNBXSB8eWqyRAWPNHTDeKjt5Pn8p4LToZJ1bhI8w+SBxnR6Dm4X0AIrLwnXqC34+O8e18aJGjI8tngQhCxi9yaf74nhLYBC5Gb6qTeFouHemSD3asJ2sWFmpYonnzi4g21n/6kE0NM//dfUawpqZuocS44HnAvfVQNaUoXQrLlg+BDOgW3BYGdgqqWJigRPxjOMKAohOpDiceg7GsXAmnvVL7wXFZs/3AHtyMHVWdNrZw48mdD61vnuPlaOz5/+e/olMwWwklaeaDTkwwJyQES7bpsvKjWRDkutZF/VohOfVSNHed3cPgEP6ZBY4q+aBMbCKSV40uFRdljaQoNgJzKrNfgavsNDj2tgVUm7zNeOCp5s70b4XACd/YwB/fl/pl8wq/6sYSmYQYBfxaJn4xyo5jqrOMFTgDdqsD5+yO+DPB+PB0gTQ+wGSQjnGcLgFg72EvlmN/UcAp5+NWQ9gD0cJg0Q+jPwbqSH9WYs5psPTxpab58zOjyh3YO/TL+cROCoJ3fBdQv2j3TAxOuQbSOt3RXHKeT+3Q7ttsTY0M3iGYXU1sapicTZNC3ZFY46oMwvifJ4KvkRgI+3gxd00j+H2nQp4xFC65u3Lng6lM/u/lczriYTjf4nBjDEc6A+rUKOy6wLobfbT9t+KgiDR/QCYhaukcUDQ1KnmRqOk18DKUvqiPdBlx0Iqyk5PEmZmEOctWpxHjxp73bt4un+wX4G0P7XczkdppEtq/dE0Ov4Ne2IHJYpKW2C4F4yTRGqokt7wF5+n4BHjEbcXMou+ZY74fd3Uzw9dhbL9xPcPjkoyW+3w3TjFKnhEZ3P9k3Usx0cCHye7v/5UnC0JCae0ChhuBnBm6uynWCb7oQRXixJVoY9egbxFuMsni6XMvCGEzyCIh6IKzwTBj5H5OXpug9HkXYUsj5jelStzYMn7d2uXzw9AKV4LuF0mGhjk2cGoZVhb9qTHAXImrRGPKHFA7LE7ESnlfM9h4m3sCevvVfDA7Golwb5DQ7PKb2dxrQmmWp+PNeunTM6CaAF4GhJtkzKB1oijtdgnBBKBiIt1pMLUzngq1CH17PYKdJ9dhYPvZAdT8uxqOFJZoCooOA+fID80rDN2tUMKeLherfrF/sHBwKfg6/nGIZKVPMn8aEZfos4plzGl/ZIeBgOZuTz33VYDdDcFu/cjKR2EjzQRoRVdTn3o4YHVh+kXx4IZSNDaW+YOWaS5sVz/ca5QOcAwbms00l0SCMdPzMFdkTTnpAggdvkfbyfUvW4A4loihT/CbEB9wsMYFgiHmjPFlcTUW7MOA+eJO6j2UCffqylMYjCGr65rUe0nYODeYehUg1oma1hJemO+90ho0a3AI2QFbYDVQtpS5rQTCr01OJ40QpiUWzdk+BhY87E8eBmHktSojPxiBmMw1C8CS356RprWq1TzYEH87mPbOeYg3P8l5ezr6GgcdKk/CgYVOqDIJkUSN9kSRu9buBKO2yGAhG20nSA+dbptCd9Qza1OzvATbqVPKki4qGt3CLPfLVP6eWFwY8aHhoEOqSUJjMWnx3XYpefOtHDblkRD10PgmznGInB+er/FC6hpCN+Csvih3V+2kOzGTfL8zx22yyaTl7QZ6Od7Pus8RuSfbnpuAF3UHJ2oZCKgXWULyXvF9mMucqinnnw3L1/QeAwPos7HU6dhi6Vw9dGlNvtJlPBlXyaO42Mcs+1SfBI5lsz09mKeDSxJJYv4qE9hdLSsbms52L/ONXXy3A6vMb5RJUeZpIJzQwDh18Clfm+x9+V+OxdlEuJEp1mz54poSoecWXD2BTx0LlupXWXynju33+c2A6ynuO/vlQ5/VxqVzMrPbxqroUd8WtgPPEWawKDSEzjDLgqCzT5Sh2txZuwl/uhd8hDTMNDe6weV8ox2LybOc2MiR4qdTx3z1M6x1+9VDr73KpVYz/0LNsL/diUL2FpOSSRZbsNSUokiHEi3/J8M9911Ieuh3dF8EsKgKceNJtN7rGiToR/AxId1ZC4BnJwNb+dqIt3JssXu0N0HlwOdOoK/lmVtBuANLvaM5nKeHjbWarTyao9alUqrdGUnrnfqg/GrQnrj3qV8fhowgP3nVb9iDySAvM9OesAdSvjoyW81rSGbqMry9qQOMVSe2uDMp7zgxcvVuR0rl4kcTxrKmxFgqah+NCfIp7H/3v8Auv4+MUKnM7q1R8LnQmJ0cLFLeQyggG04u8sK/y03+P7jx9fUDqvJpyu6QnLRDR+zv+qBZldxYMVfhjz8eP71HZerNTprEww1ealxiJbW3dVyuazp0vhZ2XvM9t5ZZ1OJllHs2uFPCwJ6fNw2rpqXio/ygy28/XfllC6YsRmquNBpVI3uYTo1etojqhaU/vF+b9hOH9dWnqtALF0GqeCPA+MV5UPV8GjaS9fLlSm4pVbO1PQw5IVtqZS9XglPK++6iKfhmrnv2SR/M4cD6C+Lng0zUzX4vhLfkBXWR3PC0Nv1tpDTq8PHm00MHzP852gUkjMhtXujpDmsNzXCM+rqBLPWqvEs9YCPEW5ylIzVEd4AmPCzEepojUwAoRHNUNX6opVRXgcIyhmDF1qhmqB6WhuEJUvxF9LtaLA1TzDKOhtaqWmq2kYnqY7ZWi9lkJhtaNruh0YE1YtlSpQncAILIRH900jmLC6rlRR6iOj8XWMB3dvQWk/ayVkOyaediePN0emYZb+Z41UQUDI7BB9OYCJ4rdl/+Z7qcup1kIxmwlLVjQ6RxWYRhRUB/VKqUJVH1SDyDAD+jwAxaNbjoEIlVoDmYHBntxM8Oi65zpBYJYqWEHguOnM+/8DCPvvyQhI2PUAAAAASUVORK5CYII='
                alt=''
                className="MuiGridListTile-imgFullHeight" style={{maxWidth:'45vw'}} /></a>
               
          
</Item>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={12}>
             <Item sx={{boxShadow:'none',}}>
             <a href={"https://www.apple.com/in/app-store/"}>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfGK1Q_O6zqtJdsFHX_KLNyk1CHUsipbMLw&usqp=CAU'
                alt=''
                className="MuiGridListTile-imgFullHeight"  style={{maxWidth:'45vw'}} /></a>
             </Item>
        </Grid>
        <Grid item xs={12}  sm={12} md={3} lg={12}>
          <Item sx={{boxShadow:'none',}}><img
          src='https://dam.which.co.uk/IC20006-0127-00-front-615x461.jpg' alt=''  style={{maxWidth:'45vw'}} /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
