import React from "react";
import { Button } from "./button";

interface UnsavedChangesModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const UnsavedChangesModal: React.FC<UnsavedChangesModalProps> = ({
  open,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
        <h2 className="font-semibold text-lg mb-2">Unsaved Changes</h2>
        <p className="text-sm text-gray-500 mb-4">
          You have unsaved changes. Are you sure you want to leave this page?
        </p>
        <div className="flex justify-end gap-2">
          <Button 
            className="text-gray-700 bg-gray-200 hover:bg-gray-300"
            variant="outline" onClick={onCancel}>Cancel</Button>
          <Button variant="destructive" className="text-gray-50 bg-red-500 hover:bg-red-400" onClick={onConfirm}>Leave</Button>
        </div>
      </div>
    </div>
  );
};