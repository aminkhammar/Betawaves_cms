
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface StyleSettings {
  heroImage: string;
  runningTextCompanies: string[];
  collaborators: string[];
}

interface StyleManagementFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (settings: StyleSettings) => void;
  currentSettings: StyleSettings;
}

const StyleManagementForm: React.FC<StyleManagementFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  currentSettings 
}) => {
  const [formData, setFormData] = useState({
    heroImage: currentSettings.heroImage,
    companiesText: currentSettings.runningTextCompanies.join('\n'),
    collaboratorsText: currentSettings.collaborators.join('\n')
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let heroImageUrl = formData.heroImage;

  if (imageFile) {
    const uploadForm = new FormData();
    uploadForm.append('image', imageFile);

    try {
      const res = await fetch('http://localhost:3000/api/uploads/style-hero-image', {
        method: 'POST',
        body: uploadForm
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Upload failed: ${errorText}`);
      }

      const data = await res.json();
      heroImageUrl = data.url;
    } catch (err) {
      console.error('Hero image upload failed:', err);
      return;
    }
  }
    onSubmit({
      heroImage: heroImageUrl,
      runningTextCompanies: formData.companiesText
        .split('\n')
        .map(company => company.trim())
        .filter(company => company !== ''),
      collaborators: formData.collaboratorsText
        .split('\n')
        .map(collaborator => collaborator.trim())
        .filter(collaborator => collaborator !== '')
    });
    onClose();
  };


  const [imageFile, setImageFile] = useState<File | null>(null);
const [imagePreview, setImagePreview] = useState<string>(currentSettings.heroImage);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Style Management</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
  <Label htmlFor="heroImage">Upload Hero Section Image</Label>
  <Input
    id="heroImage"
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) {
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
      }
    }}
  />
  {imagePreview && (
    <img
      src={imagePreview}
      alt="Preview"
      className="w-full h-32 object-cover rounded-lg border mt-2"
    />
  )}
</div>

          
          <div className="space-y-2">
            <Label htmlFor="companies">Running Text Companies (one per line)</Label>
            <Textarea
              id="companies"
              value={formData.companiesText}
              onChange={(e) => setFormData(prev => ({ ...prev, companiesText: e.target.value }))}
              placeholder="Company Name 1&#10;Company Name 2&#10;Company Name 3"
              rows={4}
              required
            />
            <p className="text-sm text-gray-500">
              Enter each company/investor name on a new line. These will appear in the running text above the mission section.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="collaborators">Collaborators (one per line)</Label>
            <Textarea
              id="collaborators"
              value={formData.collaboratorsText}
              onChange={(e) => setFormData(prev => ({ ...prev, collaboratorsText: e.target.value }))}
              placeholder="Collaborator Name 1&#10;Collaborator Name 2&#10;Collaborator Name 3"
              rows={4}
              required
            />
            <p className="text-sm text-gray-500">
              Enter each collaborator name on a new line. These will appear in the collaborators section.
            </p>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Update Style Settings
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StyleManagementForm;
