import { verifyCloudProof } from '@worldcoin/idkit';

export default async function handler(req: { method: string; body: { proof: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: any; success?: boolean; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
  if (req.method === 'POST') {
    const { proof } = req.body;
    const appId = `app_${process.env.WORLD_APP_ID}`; // Your environment variable
    const action = `app_${process.env.ACTION_ID}`;  // Another environment variable if needed

    if (!appId || !action) {
      res.status(500).json({ error: 'Environment variables missing.' });
      return;
    }

    try {
      const verificationResponse = await verifyCloudProof(proof, 'app_staging_29b77498a571ddce4fa0f18a79964122', 'vitalik-jovanovic');
      if (verificationResponse.success) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, error: verificationResponse.detail });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
