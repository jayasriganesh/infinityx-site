Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap("c:\Users\rekap\OneDrive\Desktop\infinitx\infinitx-app\public\infinitX main logo.png")
$colors = @{}
for($x=0; $x -lt $bmp.Width; $x+=5) {
    for($y=0; $y -lt $bmp.Height; $y+=5) {
        $c = $bmp.GetPixel($x, $y)
        if($c.A -gt 100 -and !($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) -and !($c.R -lt 15 -and $c.G -lt 15 -and $c.B -lt 15)) {
            $hex = "#{0:X2}{1:X2}{2:X2}" -f $c.R, $c.G, $c.B
            $colors[$hex]++
        }
    }
}
$colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 5
